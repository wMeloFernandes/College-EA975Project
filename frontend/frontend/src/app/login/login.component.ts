import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;


  constructor(public appService: AppService){
  }

  ngOnInit() {
    this.email = "";
    this.password = "";
  }

  onGetEmail(event: any){
    this.email = event.target.value;
  }

  onGetPassword(event: any){
    this.password = event.target.value
  }

  makeLogin(){
    this.appService.login(this.email, this.password);
  }

}
