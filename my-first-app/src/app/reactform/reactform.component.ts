import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  constructor() { }
  myForm: any;
  ngOnInit(): void {}
}
    // this.myForm = new FormGroup({
    //   name: new FormControl('john'),
    //   email: new FormControl('twinkle@gmail.com')
    // });
  //     this.myForm=this.fb.group({
  //       name:['john',Validators.required],
  //       email:['twinkle@gmail.com',Validators.required]
  //     });

  // }
  // onSubmit(form: FormGroup) {
  //   console.log('name',form.value.name);
  //   console.log('email',form.value.email);
  // }

