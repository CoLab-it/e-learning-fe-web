import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  
  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('number') number: any;
  @ViewChild('address') address: any;
  constructor (private userServ:UserService){}

  data: profile = {};
  userProfile: any;

  ngOnInit(): void {
    this.userGetData()
  }
  userGetData() {
    this.userServ.getUserProfile().subscribe({
      next: (res) => {
        this.userProfile = res.user[0];
        this.username.value = this.userProfile?.name;
        this.email.value = this.userProfile?.email;
        this.number.value = this.userProfile?.phonenumber;
        this.address.value = this.userProfile?.userProfile[0]?.address;
      },
      error: (err) => {
        console.log(err);
      },
    });
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
