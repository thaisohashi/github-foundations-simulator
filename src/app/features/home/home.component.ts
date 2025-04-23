import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { QuizService } from '../../core/service/quiz.service';
import { QuizStateService } from '../../core/service/quiz-state.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../core/service/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public questionsCount: number = 10;
  public maxQuestions: number = 0;

  constructor(
    private router: Router,
    private quizService: QuizService,
    private quizStateService: QuizStateService,
    private languageService: LanguageService
  ) { }

  public ngOnInit(): void {
    this.quizService.getMaxQuestions().subscribe((max) => {
      this.maxQuestions = max;
    });
  }

  public switchLanguage(lang: 'pt' | 'en') {
    this.languageService.setLanguage(lang);
  }

  get currentLanguage(): string {
    return this.languageService.currentLanguage;
  }

  public startQuiz() {
    if (this.questionsCount <= this.maxQuestions) {
      this.quizStateService.setQuestionsCount(this.questionsCount);
      this.router.navigate(['/quiz']);
    }
  }
}
