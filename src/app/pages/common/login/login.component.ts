import { Component, ViewChild } from '@angular/core';
import { login } from '../../../login.interface';
import { InputComponent } from '../../../components/common/input/input.component';
import { FormBuilder } from '@angular/forms';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { SignupButtonDirective } from '../../../directives/signupbutton.directive';
import { SignupService } from '../../../services/signup.service';
import { Router } from '@angular/router';
import { ButtonLoadingComponent } from '../../../components/common/button-loading/button-loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent,ButtonComponent,SignupButtonDirective, ButtonLoadingComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('email') email!: InputComponent ;
  @ViewChild('password') password!: InputComponent ;
  submit=false
  buttonboolean:boolean=false
  visible:boolean = true
  changetype:boolean = true
  successmessage!:string
  errormessage!:string

  logindata:login={};


  constructor(private signupservice:SignupService, private router:Router){
  }

  ngOnInit(): void {}

  viewPass(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }


  onSubmit(){
    this.submit =true;
    this.logindata.useremail=this.email.value
    this.logindata.userpass=this.password.value
    if (this.logindata.useremail && this.logindata.userpass) {
      this.buttonboolean = true;
        this.signupservice.userlogin(this.logindata).subscribe({
          next: (res) => {
            this.buttonboolean=false;
            this.successmessage = res.message;
            if (res.success) {
              this.router.navigate(["/userhome"]);
              localStorage.setItem('token',res.token)
            } else {
              setTimeout(()=>{
              this.buttonboolean=false;
                this.successmessage=''
              },2000)
            }
          },
          error: (err) => {
            this.buttonboolean=false;
            this.errormessage = err.error.message;
            setTimeout(()=>{
              this.errormessage=''
            },2000)
          },
        });
    }
    
  }
}
