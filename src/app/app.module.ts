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



// auth
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './components/home/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BodyUserComponent } from './components/users/body-user/body-user.component';
import { LeftUserComponent } from './components/users/left-user/left-user.component';


// chart
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DataComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    LoadingComponent,
    BodyUserComponent,
    LeftUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [AuthGuard, BodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
