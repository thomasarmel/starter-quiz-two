import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  private urlToCall="https://api.myjson.com/bins/silu2";

  constructor(private http: HttpClient) {
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz);
    quiz.questions=[];
    this.quizzes$.next(this.quizzes);
  }

  getNbQuizzes() {
    return this.quizzes.length;
  }

  deleteQuiz(quiz: Quiz) {
    let index = this.quizzes.indexOf(quiz);
    if(index > -1) {
      this.quizzes.splice(index, 1);
    }
    this.quizzes$.next(this.quizzes);
  }

  getQuizzes() {
    return this.http.get<Quiz[]>(this.urlToCall).subscribe((tickets) => {
      this.quizzes = tickets;
      this.quizzes$.next(tickets);
    });
  }

  addQuestion(quiz: Quiz, question: Question) {
    quiz.questions.push(question);
    this.quizzes$.next(this.quizzes);
  }
}
