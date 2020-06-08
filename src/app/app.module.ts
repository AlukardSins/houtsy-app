import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BodyComponent } from './components/home/body/body.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



//auth
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DataComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, BodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
