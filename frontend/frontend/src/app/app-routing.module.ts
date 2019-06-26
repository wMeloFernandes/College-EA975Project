import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/listusers', pathMatch: 'full' },
  { path: 'listusers', component: ListUsersComponent },
  { path: 'newuser', component: NewUserComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { 
}
