import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { QuestionDTO } from "../dto/quiz.dto";
import { MOCK_QUESTIONS } from '../mock/quiz.mock';

@Injectable({
  providedIn: 'root',
})
export class QuizService {

  private shuffleArray(array: QuestionDTO[]): QuestionDTO[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public getQuestions(count: number): Observable<QuestionDTO[]> {
    const shuffledQuestions = this.shuffleArray(MOCK_QUESTIONS);
    const selectedQuestions = shuffledQuestions.slice(0, count);
    return of(selectedQuestions);
  }

  public getMaxQuestions(): Observable<number> {
    return of(MOCK_QUESTIONS.length);
  }
}
