import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'my-first-app';
  pcont="This is My First Application"
  imgUrl= '.././assets/image/nature.jpg';

  count=0;
  counterval(){
    this.count++;
  }

  fname="";
  fillname(){
   this.fname="john";
  }
}
