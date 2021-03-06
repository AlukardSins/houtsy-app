import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './auth/auth.guard';
import { LoadingComponent } from './components/loading/loading.component';


const routes: Routes = [
{
    path: 'home', component: HomeComponent,
},
{
    path: 'users', component: UsersComponent, canActivate: [AuthGuard]
},
{
    path: 'loading', component: LoadingComponent
},
{
    path: '**', redirectTo: 'home', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
