import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizStateService {
  private questionsCount: number = 10;

  public getQuestionsCount(): number {
    return this.questionsCount;
  }

  public setQuestionsCount(count: number): void {
    this.questionsCount = count;
  }
}
