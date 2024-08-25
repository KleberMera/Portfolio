import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: 'about',
        loadComponent: () => import('./about/about.component'),
      },
      {
        path: '**',
        redirectTo: 'about',
      }
    ],
  },
];

export default routes;
