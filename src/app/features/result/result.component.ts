import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { QuestionDTO } from '../../core/dto/quiz.dto';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, FormsModule, MatExpansionModule, MatIconModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public questions: QuestionDTO[] = [];
  public selectedAnswers: { [key: number]: number } = {};
  public totalQuestions: number = 0;
  public correctAnswers: number = 0;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    const navigationState = history.state;
    if (navigationState && navigationState.questions && navigationState.selectedAnswers) {
      this.questions = navigationState.questions;
      this.selectedAnswers = navigationState.selectedAnswers;
      this.totalQuestions = this.questions.length;
      this.correctAnswers = this.calculateCorrectAnswers();
    }
  }

  private calculateCorrectAnswers(): number {
    return this.questions.filter((question, index) => {
      const correctOption = question.alternatives.find((option: { is_correct: boolean; }) => option.is_correct);
      return this.selectedAnswers[index] === correctOption?.id;
    }).length;
  }

  public get successPercentage(): number {
    return (this.correctAnswers / this.totalQuestions) * 100;
  }

  public startNewQuiz() {
    this.router.navigate(['/']);
  }

  public isAnswerCorrect(i: number): boolean {
    const question = this.questions[i];
    const correctId = question.alternatives.find((a: { is_correct: boolean; }) => a.is_correct)?.id;
    return this.selectedAnswers[i] === correctId;
  }
}
