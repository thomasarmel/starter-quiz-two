import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { QuizTheme } from '../../../models/quiz.model';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  private quizList: Quiz[] = [];

  constructor(private route: ActivatedRoute, public quizService: QuizService) {
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
  }

  ngOnInit() {
    this.getQuiz();
  }

  public id;
  public quiz: Quiz;

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
