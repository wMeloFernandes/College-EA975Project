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
import { TimeUserComponent } from './time-user/time-user.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    DetailUserComponent,
    NewUserComponent,
    TimeUserComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
