import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portfolio.routes'),
  },
  {
    path: '',
    redirectTo: 'portafolio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'portafolio',
    pathMatch: 'full',
  }
];
