import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/layout.component'),
    children: [
      

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

export default routes;
