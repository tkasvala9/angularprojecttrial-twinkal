import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { DatetimeService } from "./datetime.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'my-first-app';
  getDate:any;
  array:any;
  constructor(private dt: DatetimeService){
    this.getDate = this.dt.today;
    this.array=this.dt.numarray;
  }

  }
