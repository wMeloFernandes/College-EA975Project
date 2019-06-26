import { Component, OnInit } from '@angular/core';

class Admin {
    username: string;
    password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin = {username:"", password:""} 

  constructor() { }

  ngOnInit() {
  }

}
