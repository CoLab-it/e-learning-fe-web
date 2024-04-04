import { Component, OnInit, ViewChild, input } from '@angular/core';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { login } from '../../../login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent,ButtonComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild('name') name!: InputComponent ;
  @ViewChild('email') email!: InputComponent ;
  @ViewChild('phone') phone!: InputComponent ;
  @ViewChild('password') password!: InputComponent ;
  @ViewChild('confirmpassword') confirmpassword!: InputComponent ;
  submit=false

  logindata:login={};


  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {}


  onSubmit(){
    this.submit =true;
    this.logindata.username=this.name.value
    this.logindata.useremail=this.email.value
    this.logindata.userphone=this.phone.value
    this.logindata.userpass=this.password.value
    this.logindata.userconfirmpass=this.confirmpassword.value
  }
}
