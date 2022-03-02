import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpDataRequestService } from './http-data-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-app';
  constructor(public ht: HttpDataRequestService) { }
  

  ngOnInit() {
    this.ht.getdata().subscribe((data)=>this.show(data));
    
  }
  hdata:any;
  show(data: any) {
    return this.hdata=data;
  }

  id='';
  likes="";
 body="";
  getData(id:any) {
    console.log(id);
    this.likes=this.hdata[id-1].likes;
    this.body=this.hdata[id-1].body;
  }
  
}
