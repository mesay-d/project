import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:FormGroup
constructor(fb:FormBuilder){
  this.login=fb.group({
   username:["",Validators.required,],
   email:["",Validators.required],
   password:["",Validators.required],
  conformationpassword:["",Validators.required]
  })

}
submite(){
  console.log(this.login.value)
  if(this.login.value){
     console.log(this.login.value)
  }
 

}
}
