import { Component, OnInit, inject, input } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ButtonComponent, RouterModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent implements OnInit {
  constructor(
    private commonServ: CommonService,
    private userServ: UserService
  ) {}

  imageUrl: any;

  ngOnInit(): void {
    this.getImg();
  }

  onLogout() {
    this.commonServ.logout();
  }

  getImg() {
    this.userServ.getImage.subscribe({
      next: (res) => {
        console.log(res);
        this.imageUrl = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  changeImage() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', (event) => {
      if (event.target instanceof HTMLInputElement && event.target.files) {
        const file = event.target.files[0];
        if (file) {
          console.log('image send to save',file);
          this.userServ.subject.next(file)
        }
      }
    });

    fileInput.click();
  }
}
