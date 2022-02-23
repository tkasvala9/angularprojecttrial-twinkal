import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cofeelogo',
  templateUrl: './cofeelogo.component.html',
  styleUrls: ['./cofeelogo.component.css']

})
export class CofeelogoComponent implements OnInit {
  imgUrl= '.././assets/image/coffe.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
