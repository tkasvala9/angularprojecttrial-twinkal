import { Component, Input, OnInit } from '@angular/core';
import { DatetimeService } from '../datetime.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(public dt:DatetimeService){ }
  
  

  ngOnInit(): void {
  }
  
  
  
}
