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
  getdate:any;
  array:any;
  constructor(public dt:DatetimeService){ 
    this.getdate=this.dt.today;
    this.array=this.dt.numarray;
  }
  
  
  

  
}
 