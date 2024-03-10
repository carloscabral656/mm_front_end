import { Routes } from "@angular/router";
import { MainInterfaceComponent } from "../features/main-interface/main-interface.component";
import { HomeInterfaceComponent } from "../../home/features/home-interface/home-interface.component";

export const mainRoutes: Routes = [
    {
        path: '',
        component: MainInterfaceComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeInterfaceComponent,
        loadChildren: () => import('../../home/routes/routes').then(m => m.homeRoutes),
    }
]