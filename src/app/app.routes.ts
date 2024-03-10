import { Routes } from '@angular/router';
import { MainInterfaceComponent } from './slices/main/features/main-interface/main-interface.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./slices/login/routes/routes').then((m) => m.loginRoutes),
  },
  {
    path: 'management-app',
    component: MainInterfaceComponent,
    loadChildren: () =>
      import('./slices/main/routes/routes').then((m) => m.mainRoutes),
  },
  { path: '**', redirectTo: 'management-app' },
];
