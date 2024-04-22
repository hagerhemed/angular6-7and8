import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userRegisterForm:FormGroup
  constructor(){
    this.userRegisterForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-z-A-Z]{3,10}$')]),
      email:new FormControl(''),
      password:new FormControl(''),
      address:new FormGroup({
        city:new FormControl(''),
        street:new FormControl(''),
      }),
      phoneNums: new FormArray([new FormControl('')])
    })
  }
  ngOnInit(): void {
    this.userRegisterForm.setValue({
      name:"Hager",
      email:"hager@gmail.com",
      password:"65437",
      address:{
        city:"beni suef",
        street:"54"
      }
    })
  }
  register(){
    // alert('Done')
    console.log(this.userRegisterForm.value)
  }
   get name(){
    return this.userRegisterForm.get("name")
  }
  get phones(){
    return this.userRegisterForm.get("phoneNums") as FormArray
  }
  addNewPhone(){
    this.phones.push(new FormControl(''))
  }

}
