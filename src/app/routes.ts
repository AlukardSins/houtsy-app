import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
export const appRoutes: Routes =[
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'users', component: UsersComponent,
    }/*,
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    }*/
];