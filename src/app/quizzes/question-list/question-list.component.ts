import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormArray } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Question } from '../../../models/question.model';
import { QuizTheme } from '../../../models/quiz.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(public quizService: QuizService, private route: ActivatedRoute) {
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
    //this.quizService.quizzes$.subscribe((quiz) => this.questionList=this.quiz.questions);
  }

  private quizList: Quiz[] = [];
  public questionList: Question[] = [];
  public id;
  public quiz: Quiz;

  ngOnInit() {
    this.getQuiz();
    this.questionList=this.quiz.questions;
  }

  getId(): number {
    this.id = +this.route.snapshot.paramMap.get('id');
    return this.id;
  }

  getQuiz(): void {
    this.getId();
    let comp=this;
    this.quizList.forEach(function(q) {
        if(q.id === comp.id) {
          comp.quiz=q;
        }
      }
    );
  }
}
