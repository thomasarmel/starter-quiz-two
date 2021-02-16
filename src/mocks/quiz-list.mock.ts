import { Quiz } from '../models/quiz.model';
import { QuizTheme } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
   label: 'Jean Gabin a joué dans...',
   answers: [
       {
           value: 'Les tuches II',
           isCorrect: false,
       },
       {
           value: 'La grande illusion',
           isCorrect: true,
       }
   ]
};

export const QUESTION_SPORT: Question = {
   label: 'La natation se pratique dans un bassin rempli...',
   answers: [
       {
           value: 'D\'eau',
           isCorrect: true,
       },
       {
           value: 'D\'huile',
           isCorrect: false,
       }
   ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: QuizTheme.ACTORS,
        questions: [QUESTION_ACTOR],
        id: 0,
    },
    {
        name: 'Les Sports',
        theme: QuizTheme.SPORTS,
        questions: [QUESTION_SPORT],
        id: 1,
    }
];
