import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private job: string;
  private email: string;
  private password: string;
  private passwordCheck: string;


  constructor(public appService: AppService, private router : Router) { }

  ngOnInit() {
  }

  onGetFirstName(event: any){
    this.firstName = event.target.value;
  }

  onGetLastName(event: any){
    this.lastName = event.target.value;
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

  onGetCheckPassword(event: any){
    this.passwordCheck = event.target.value;
  }

  createUser(){
    const name = this.firstName + " " + this.lastName;
    
    if(this.firstName !== undefined && this.lastName!== undefined && this.email !== undefined && this.job!== undefined && this.password !== undefined && this.passwordCheck !== undefined){
      if(this.password === this.passwordCheck){
        this.appService.createUser(name, this.job, this.email, this.password)
          .subscribe(resp=>{
            this.router.navigate(['/listusers']);
          },(err)=>{
            if(err){console.error(err)};
            alert("Erro ao criar novo usuário!");
          })
      }else{
        alert("As senhas não coincidem. Tente novamente!");
      }
    }else{
      alert("Preencha todos os campos");
    }
  }

}
