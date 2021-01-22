import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  forms=new FormGroup({
    name:new FormControl('', [Validators.required,Validators.minLength(2), Validators.maxLength(5)]),
    password:new FormControl(''),sslc:new FormControl(''),degree:new FormControl(''),car:new FormControl(''),
    address: new FormGroup({
      state: new FormControl(''),
      city: new FormControl('')
    })
  });
  Submit()
  {
    console.log(this.forms.value);
    
  }

}
