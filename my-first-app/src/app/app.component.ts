import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { DatetimeService } from './datetime.service';
import { UserinfoService } from './userinfo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-app';
  getdate: any;
  array: any;

  constructor(public dt: DatetimeService, public us: UserinfoService) {
    this.getdate = this.dt.today;
    this.array = this.dt.numarray;
  }


  incrementCounter() {
    this.us.counter++;
  }

  users = {
    "firstname": '',
    "lastname": '',
    "phone": '',
    "email": ''
  }
  onsubmitofform(users: any) {
    this.users = users;
    // this.us.sendData(this.users);
    this.us.users = users;
    console.log(this.us.users);
  }

  table: any = [];

  number = '';

  printTable() {

    console.log(this.number);



    for (let i = 1; i <= 10; i++) {

      this.table.push(i * Number(this.number));

    }



  }
}
