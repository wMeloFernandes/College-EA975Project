import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

import {User} from '../user';
    
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  selectedUser: User;
  userList: any;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.getAllUsers()
      .subscribe(resp=>{
        this.userList = resp['users'];
      });
  }

  onSelect(user){
    this.selectedUser = user;
  }
  
}
