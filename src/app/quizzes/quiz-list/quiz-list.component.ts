import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  public quizList: Quiz[] = [];
  public nbQuizzes: number;

  constructor(public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
  }

  ngOnInit() {
  }

  quizSelected(selected: boolean) {
    console.log('event received from child:', selected);
  }

  quizDeleted(quiz: Quiz) {
    console.log(quiz);
    this.quizService.deleteQuiz(quiz);
  }
}
