import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from '../environments/environment.prod';
import { BoundDirectivePropertyAst } from '@angular/compiler';


const BACKEND_URL = "http://localhost:3000/";

@Injectable({ providedIn: "root" })
export class AppService {
  
  constructor(private http: HttpClient){
  }


  login(email: string, password: string){
    let body = {
      email: email,
      password: password
    };

    this.http.post(BACKEND_URL + "loginAdm", body)
      .subscribe(result=>{
        console.log(result);
      });
  }


  getUserById(email: string){
    const queryParams = `?email=${email}`;

    this.http.get(BACKEND_URL + "admin" + queryParams)
      .subscribe(result=>{
        console.log(result);
      });
  }


  createUser(name: string, job:string, email: string, password: string){
    let body = {
      name: name,
      job: job,
      email: email,
      password: password
    };

    this.http.post(BACKEND_URL + "admin", body)
      .subscribe(result=>{
        console.log(result);
      });
  }

  updateUser(name: string, job:string, email: string){
    let body = {
      name: name,
      job: job,
      email: email
    };

    this.http.put(BACKEND_URL + "admin", body)
      .subscribe(result=>{
        console.log(result);
      });
  }

  deleteUser(email: string){
    const queryParams = `?email=${email}`;
    this.http.delete(BACKEND_URL + "admin" + queryParams)
      .subscribe(result=>{
        console.log(result);
      });
  }

  getAllUsers(){
    this.http.get(BACKEND_URL + "adminAll")
      .subscribe(result=>{
        console.log(result);
      });
  }

  createAdmin(name: string, email: string, password: string){
    let body = {
      name: name,
      email: email,
      password: password
    };

    this.http.post(BACKEND_URL + "adminAll", body)
      .subscribe(result=>{
        console.log(result);
      });
  }

  generateQRCode(){
    this.http.get(BACKEND_URL + "qrCode")
      .subscribe(result=>{
        console.log(result);
      });
  }


}
