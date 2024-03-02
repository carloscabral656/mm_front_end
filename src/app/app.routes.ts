import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./slices/login/routes/routes').then(m => m.loginRoutes),
    }
];
