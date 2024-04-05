import { Component, OnInit, ViewChild, input } from '@angular/core';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { login } from '../../../login.interface';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { SignupService } from '../../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  @ViewChild('name') name!: InputComponent;
  @ViewChild('email') email!: InputComponent;
  @ViewChild('phone') phone!: InputComponent;
  @ViewChild('password') password!: InputComponent;
  @ViewChild('confirmpassword') confirmpassword!: InputComponent;
  submit = false;
  lowercase = false;
  emailtest = false;
  passtest = false;
  confirmpass!: boolean;
  successmessage!: string;
  errormessage!: string;

  signupdata: login = {};

  constructor(private signupservice: SignupService) {}

  ngOnInit(): void {}

  /** checking if the username small letter only */
  namecheck() {
    this.signupdata.username = this.name.value;
    if (this.signupdata.username?.toLowerCase() !== this.signupdata.username) {
      this.lowercase = true;
    } else {
      this.lowercase = false;
    }
  }

  /** checking email format*/
  emailcheck() {
    this.signupdata.useremail = this.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    this.emailtest = emailRegex.test(this.email.value);
    if (!this.emailtest && this.email.value.trim() !== '') {
      this.emailtest = true;
    } else {
      this.emailtest = false;
    }
  }

  /** checking email format*/
  passwordcheck() {
    this.signupdata.userpass = this.password.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.passtest = passwordRegex.test(this.password.value);
    if (!this.passtest && this.password.value.trim() !== '') {
      this.passtest = true;
    } else {
      this.passtest = false;
    }
  }

  confirmpasscheck() {
    this.signupdata.userconfirmpass = this.confirmpassword.value;
    if (
      this.signupdata.userpass?.trim() !== this.confirmpassword.value?.trim() &&
      this.confirmpassword.value !== ''
    ) {
      this.confirmpass = true;
    } else {
      this.confirmpass = false;
    }
  }

  onSubmit() {
    this.submit = true;
    this.signupdata.userphone = this.phone.value;
    if (
      this.signupdata.username &&
      this.signupdata.useremail &&
      this.signupdata.userphone &&
      this.signupdata.userpass &&
      this.signupdata.userconfirmpass
    ) {
      if (
        !this.lowercase &&
        !this.emailtest &&
        !this.passtest &&
        !this.confirmpass
      ) {
        this.signupservice.userSignup(this.signupdata).subscribe({
          next: (res) => {
            console.log(res);
            this.successmessage = res.message;
            this.signupservice.token=res.token;
            setTimeout(()=>{
              this.successmessage=''
            },2000)
          },
          error: (err) => {
            this.errormessage = err.error.message;
            setTimeout(()=>{
              this.errormessage=''
            },2000)
          },
        });
      }
    }
  }
}
