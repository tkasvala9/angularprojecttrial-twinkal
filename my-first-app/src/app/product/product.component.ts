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
  // @Output() newItemEvent=new EventEmitter();
  // @Input() cart=1;

  @Output() descriptionofproduct=new EventEmitter<any>();

  products=[
    {
      "id":1,
      "productname":"rice",
      "price":400,
      "quntityavailable":5,
      "location":"rajkot",
      "presentstock":40
      },
      
    {
      "id":2,
      "productname":"moong",
      "price":300,
      "quntityavailable":4,
      "location":"rajkot",
      "presentstock":50
      },
      
    {
      "id":3,
      "productname":"chana",
      "price":400,
      "quntityavailable":7,
      "location":"surat",
      "presentstock":50
    },
    {
      "id":4,
      "productname":"rajma",
      "price":300,
      "quntityavailable":9,
      "location":"junagadh",
      "presentstock":30
    },
    {
      "id":5,
      "productname":"choli",
      "price":100,
      "quntityavailable":8,
      "location":"surendranagar",
      "presentstock":50
    }  
  ]

addnewItem(){
  // this.newItemEvent.emit();
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
addtocart(productdata:any){
  this.descriptionofproduct.emit(productdata);
} 

}
