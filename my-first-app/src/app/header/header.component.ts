import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() itemreceived='';
  itemsent="vollyball";
  item1="robot";
  @Input() arrayrecieves:any

  counters=["0"];
  count:any=0;
  incrementcounter(){
    this.counters.push();
    this.count++
  }
  
}
