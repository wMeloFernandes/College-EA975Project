import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component'
import { DetailUserComponent } from './detail-user/detail-user.component';
import { TimeUserComponent } from './time-user/time-user.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listusers', component: ListUsersComponent},
  { path: 'newuser', component: NewUserComponent },
  { path: 'detailUser/:email', component: DetailUserComponent },
  { path: 'timeUser/:email', component: TimeUserComponent },
  { path: 'qrCode', component: QrCodeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { 
}
