import { Component, OnInit, ViewChild, input } from '@angular/core';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { login } from '../../../login.interface';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputComponent,ButtonComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  @ViewChild('name') name!: InputComponent ;
  @ViewChild('email') email!: InputComponent ;
  @ViewChild('phone') phone!: InputComponent ;
  @ViewChild('password') password!: InputComponent ;
  @ViewChild('confirmpassword') confirmpassword!: InputComponent ;
  submit=false

  signupdata:login={};


  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {}


  onSubmit(){
    this.submit =true;
    this.signupdata.username=this.name.value
    this.signupdata.useremail=this.email.value
    this.signupdata.userphone=this.phone.value
    this.signupdata.userpass=this.password.value
    this.signupdata.userconfirmpass=this.confirmpassword.value
    console.log(this.signupdata);
    
  }
}
