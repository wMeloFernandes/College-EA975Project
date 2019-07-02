import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  private name: string;
  private job: string;
  private email: string;
  private password: string;


  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  onGetName(event: any){
    this.name = event.target.value;
  }

  onGetJob(event: any){
    this.job = event.target.value;
  }

  onGetEmail(event: any){
    this.email = event.target.value;
  }

  onGetPassword(event: any){
    this.password = event.target.value;
  }

  createUser(){
    this.appService.createUser(this.name, this.job, this.email, this.password);
  }

}
