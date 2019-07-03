import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';

    
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  selectedUser: any;
  userList: any;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.getAllUsers()
      .subscribe(resp=>{
        this.userList = resp['users'];
      });
  }

  onSelect(user){
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  deleteUser(email: any){
    this.appService.deleteUser(email)
      .subscribe(resp=>{
        console.log(resp);
        window.location.reload();
      },(err)=>{
        if(err){console.error(err)};
        alert("Erro ao deletar usuário!");
      })
  }
  
}
