import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InputComponent, ButtonComponent],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent implements OnInit {
  constructor(private router: Router, private userServ: UserService) {}

  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('number') number: any;
  @ViewChild('address') address: any;

  data: profile = {};
  userProfile: any;

  ngOnInit(): void {
    this.userGetData();
  }
  userGetData() {
    this.userServ.getUserProfile().subscribe({
      next: (res) => {
        this.userProfile = res.user[0];
        this.username.value = this.userProfile?.name;
        this.email.value = this.userProfile?.email;
        this.number.value = this.userProfile?.phonenumber;
        this.address.value = this.userProfile?.userProfile[0].address;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
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
    this.userServ.updateUserProfile(this.data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

interface profile {
  username?: String;
  email?: String;
  number?: Number;
  address?: String;
}
