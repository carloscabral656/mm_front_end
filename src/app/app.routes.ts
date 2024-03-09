import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => import('./slices/login/routes/routes').then(m => m.loginRoutes),
    },
    {
        path: 'home',
        loadChildren: () => import('./slices/home/routes/routes').then(m => m.homeRoutes),
    }
];
