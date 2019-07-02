import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../app.service';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  @Input() user: any;

  constructor(public appService: AppService) { 
  }

  ngOnInit() {
    
  }

}
