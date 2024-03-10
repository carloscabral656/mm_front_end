import { Routes } from "@angular/router";
import { HomeInterfaceComponent } from "../features/home-interface/home-interface.component";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeInterfaceComponent,
        pathMatch: 'full'
    }
];

