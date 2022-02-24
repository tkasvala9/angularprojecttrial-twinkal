import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

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

  formfillup(){
    
  }

  firstname="john";
  able=true;
  
  gnumber=0;
   evenodd(){
    if(this.gnumber%2==0){
      return true;
    }
    else{
      return false;
    }
   }
   
   numArrays=[10,23,45,67,78];
   StrArrays=["john","jems","keych"];
   stringArrays=["johnny","alackzander","thommasan","bobbb","disuzaa","albert","robbot","martin","messsy","ronaldo"];
   StringArrays=["johnny","alackzander","thommasan","bobbb","disuzaa"];

   item="laptop";
   NumArrays=[10,23,45,67,78];
}
