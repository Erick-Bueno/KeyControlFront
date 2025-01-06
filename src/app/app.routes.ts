import { Routes } from '@angular/router';

export const routes: Routes = [
    {
       path: "",
       loadChildren: () => import("./components/auth/auth.routes").then(l => l.routes)
    }
];
