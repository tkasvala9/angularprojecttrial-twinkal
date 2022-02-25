import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cart=1;
}
