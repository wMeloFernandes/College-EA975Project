import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../app.service'


@Component({
  selector: 'app-time-user',
  templateUrl: './time-user.component.html',
  styleUrls: ['./time-user.component.css']
})
export class TimeUserComponent implements OnInit {
  private email: string;
  private timerList: any;

  constructor(public appService: AppService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.appService.getClockRegisters(this.email)
      .subscribe(resp=>{
        this.timerList = resp['registers'];
      },(err)=>{
        if(err){console.error(err)}
        alert("Erro ao coletar registros do usuário");
      })
  }

}
