import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input} from '@angular/core';
import { DatetimeService } from '..//datetime.service';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public dt:DatetimeService,public us:UserinfoService){ }
  
 

  ngOnInit(): void {
  }
  
}
