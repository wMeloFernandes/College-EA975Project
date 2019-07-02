import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

import {User} from '../user';

const USERS: User[] = [
    {id:1, name: "Zé Roberto Magalhães" , email: "zrmaga@gmail.com", pontos: [new Date(), new Date()]},
    {id:2, name: "Humberto Magalhães" , email: "zrmaga@gmail.com", pontos: [new Date(), new Date()]},
    {id:3, name: "Doisberto Magalhães" , email: "zrmaga@gmail.com", pontos: [new Date(), new Date()]},
    {id:4, name: "Trêsberto Magalhães" , email: "zrmaga@gmail.com", pontos: [new Date(), new Date()]},
    {id:5, name: "Quatroberto Magalhães" , email: "zrmaga@gmail.com", pontos: [new Date(), new Date()]},
]
    

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  selectedUser: User;
  userList: any;
  users: any;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.getAllUsers()
      .subscribe(resp=>{
        this.userList = resp['users'];
        console.log(this.userList);
        this.users = this.userList;
      });
  }

  onSelect(user){
    this.selectedUser = user;
  }
  
}
