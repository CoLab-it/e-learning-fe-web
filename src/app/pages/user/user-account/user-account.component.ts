import { Component, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InputComponent, ButtonComponent],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent {
  constructor(private router: Router) {}

  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('number') number: any;
  @ViewChild('address') address: any;

  data: profile = {};

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  onSave() {
    this.data.username = this.username.value;
    this.data.email = this.email.value;
    this.data.number = this.number.value;
    this.data.address = this.address.value;
    console.log(this.data);
  }
}

interface profile {
  username?: String;
  email?: String;
  number?: Number;
  address?: String;
}
