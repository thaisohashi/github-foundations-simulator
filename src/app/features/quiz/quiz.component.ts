import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizStateService } from '../../core/service/quiz-state.service';
import { QuizService } from '../../core/service/quiz.service';
import { QuestionDTO } from '../../core/dto/quiz.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  public selectedAnswers: { [key: number]: number } = {};
  public questions: QuestionDTO[] = [];
  public currentQuestionIndex: number = 0;
  public totalQuestions: number = 0;
  public currentQuestion: QuestionDTO | null = null;

  constructor(
    private quizService: QuizService,
    private quizStateService: QuizStateService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    const selectedCount = this.quizStateService.getQuestionsCount();
    this.quizService.getQuestions(selectedCount).subscribe(questions => {
      this.questions = questions;
      this.totalQuestions = questions.length;
      this.setCurrentQuestion();
    });
  }

  private setCurrentQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public nextQuestion(): void {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
      this.setCurrentQuestion();
    } else {
      this.finishQuiz();
    }
  }

  public prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.setCurrentQuestion();
    }
  }

  public setAnswer(questionIndex: number, answerId: number): void {
    this.selectedAnswers[questionIndex] = answerId;
  }

  private finishQuiz(): void {
    this.router.navigate(['/result'], {
      state: {
        questions: this.questions,
        selectedAnswers: this.selectedAnswers
      }
    });
  }
}
