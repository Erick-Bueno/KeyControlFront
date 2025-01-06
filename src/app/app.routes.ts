import { Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

export const routes: Routes = [
    {
        path:"/login",
        component: LoginScreenComponent,
        loadChildren: () => import("./components/login-screen/login-screen.component").then(l => l.LoginScreenComponent)
    }
];
