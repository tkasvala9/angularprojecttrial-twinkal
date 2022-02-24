import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent=new EventEmitter();

addnewItem(){
  this.newItemEvent.emit();
}

  desc=true;
  descriptionOfProduct(){
  if(this.desc==true){
    this.desc=false;
  }
  else{
    this.desc=true;
  }
     
}

}
