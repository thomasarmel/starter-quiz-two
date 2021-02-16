import { Question } from './question.model';

export enum QuizTheme {
  SPORTS="Sports",
  ACTORS="Actors",
  PROGRAMMING="Programming",
  NUCLEAR_PHYSIC="Nuclear Physic"
}

export interface Quiz {
    name: string;
    theme: QuizTheme;
    questions: Question[];
    creationDate?: Date;
    id: number;
}
