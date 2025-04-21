import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  // {
  //   path: 'quiz',
  //   loadComponent: () => import('./features/quiz/quiz.component').then(m => m.QuizComponent)
  // }
];