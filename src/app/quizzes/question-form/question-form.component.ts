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
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  constructor(public formBuilder : FormBuilder, private route: ActivatedRoute, public quizService: QuizService) {
    this.initializeQuestionForm();
    this.quizService.quizzes$.subscribe((quiz) => this.quizList = quiz);
  }

  private quizList: Quiz[] = [];

  ngOnInit() {
    this.getQuiz();
  }

  public questionForm : FormGroup;
  public id;
  public quiz: Quiz;

  private initializeQuestionForm() {
    this.questionForm=this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    });
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false
    });
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
  }

  addQuestion() {
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.quizService.addQuestion(this.quiz, questionToCreate)
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
