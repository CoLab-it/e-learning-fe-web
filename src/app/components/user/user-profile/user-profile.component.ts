import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ButtonComponent } from '../../common/button/button.component';
import { InputComponent } from '../../common/input/input.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  @ViewChild('username') username: any;
  @ViewChild('email') email: any;
  @ViewChild('number') number: any;
  @ViewChild('address') address: any;

  constructor(private userServ: UserService) {}

  // data: profile = {};
  userProfile: any;
  file:any;
  formData= new FormData();
  imageUrl:any;
  

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
        this.address.value = this.userProfile?.userProfile[0]?.address;
        this.imageUrl=this.userProfile?.userProfile[0].imageUrl;
        this.userServ.subject.next(this.imageUrl);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onSave() {
    this.formData.append('username',this.username.value)
    this.formData.append('email',this.email.value)
    this.formData.append('number', this.number.value)
    this.formData.append('address',this.address.value)
    this.userServ.updateUserProfile(this.formData).subscribe({
      next: (res) => {
        console.log(res);
        this.userGetData()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  loadFile(event: any) {
    // console.log(event.target.files[0]);
    this.file = event.target.files[0];
    this.formData.append('imageUrl', this.file)
  }
}

interface profile {
  username?: String;
  email?: String;
  number?: Number;
  address?: String;
}
