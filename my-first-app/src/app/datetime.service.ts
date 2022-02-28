import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { 
   
  }
  firstname="";
  lastname="";
  phone="";
  email="";
 Setdata(firstname:string,lastname:string,phone:string,email:string){
   this.firstname=firstname;
   this.lastname=lastname;
   this.phone=phone;
   this.email=email;
 }
 SentData(){
   return this.firstname+this.lastname+this.phone+this.email;
 }

}
