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
    console.log('começou');
    interval(1000).subscribe(resp=>{
      console.log('começou 1');
      this.qrCode = localStorage.getItem('key');
      let key = Math.random().toString(36);
        this.appService.updateQrCodeKey(key)
          .subscribe(resp=>{
            localStorage.setItem('key', key);
            this.qrCode = key;
            window.location.reload();
          }, (err)=>{
            console.error(err);
            alert("Problema no sistema");
          })
    })
  }

}
