import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSelect(user){
    this.selectedUser = user;
  }

  users = USERS;
  
}
