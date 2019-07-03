import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  private email: string;
  private job: string;
  private name: string;

  constructor(public appService: AppService, public route: ActivatedRoute, public router: Router) { 
  }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.appService.getUserById(this.email)
      .subscribe(resp=>{
        this.job = resp['user'].job;
        this.name = resp['user'].name;
      }, (err)=>{
        if(err){console.error(err)};
        alert("Erro ao acessar informações do usuário!");
      })
  }

  onGetname(event: any){
    this.name = event.target.value;
  }

  onGetJob(event: any){
    this.job = event.target.value;
  }

  updateUser(){
    this.appService.updateUser(this.name, this.job, this.email)
      .subscribe(resp=>{
        this.router.navigate(['/listusers']);
      }, (err)=>{
        if(err){console.error(err)};
        alert("Erro ao atualizar o usuário");
      })
  }

}
