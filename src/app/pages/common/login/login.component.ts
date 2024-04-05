import { Component, ViewChild } from '@angular/core';
import { login } from '../../../login.interface';
import { InputComponent } from '../../../components/common/input/input.component';
import { FormBuilder } from '@angular/forms';
import { ButtonComponent } from '../../../components/common/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('email') email!: InputComponent ;
  @ViewChild('password') password!: InputComponent ;
  submit=false

  logindata:login={};


  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {}


  onSubmit(){
    this.submit =true;
    this.logindata.useremail=this.email.value
    this.logindata.userpass=this.password.value
    console.log(this.logindata);
    
  }
}
