import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const accountRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((mod) => mod.LoginComponent),
    },
];