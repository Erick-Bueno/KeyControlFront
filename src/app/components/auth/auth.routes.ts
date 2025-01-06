import { Routes } from "@angular/router";

export const routes: Routes = [
    {
       path: "login",
       loadComponent: () => import("./login-screen/login-screen.component").then(l => l.LoginScreenComponent)
    },
    {
        path: "register",
        loadComponent: () => import("./register-screen/register-screen.component").then(r => r.RegisterScreenComponent)
    }
]