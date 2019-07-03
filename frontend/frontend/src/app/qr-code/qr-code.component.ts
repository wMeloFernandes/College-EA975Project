import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AppService } from './../app.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  private qrCode: string;
  constructor(public appService: AppService) { }

  ngOnInit() {
    interval(30000).subscribe(()=>{
        this.appService.updateQrCodeKey()
          .subscribe(resp=>{
            console.log(resp['key']);
            this.qrCode = resp['key'];
          }, (err)=>{
            console.error(err);
            alert("Problema no sistema");
          })
    })
  }

}
