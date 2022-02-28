import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { DatetimeService } from './datetime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'my-first-app';
  constructor(public dt:DatetimeService){ }
  
  numarray:any=[]
  t:any;
  i:any;
  cratetable(value:any){
    
    for(let i=1;i<=10;i++){
      this.t=(value*i);
      this.numarray[i]=value +"*" +i+"="+this.t;
        }
  }
  sdate:any;
  edate:any;
  price:any;
  calculate(sdate:any,edate:any){
    this.sdate=new Date(sdate).getTime();
    this.edate=new Date(edate).getTime();
    let days=(this.edate-this.sdate)/(1000*3600*24);
    this.price=2000;
    console.log("total amount for trip of"+" "+days+" "+"days is"+" " +(this.price)*days);
    
  }
}