import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes : Routes = [
  {path: 'quiz-list', component: QuizListComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'edit-quiz/:id', component: EditQuizComponent},
  {path: '', redirectTo: 'quiz-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
