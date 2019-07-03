import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    DetailUserComponent,
    NewUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
