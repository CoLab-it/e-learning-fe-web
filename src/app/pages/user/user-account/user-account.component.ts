import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { ButtonComponent } from '../../../components/common/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent {
  constructor(private commonServ:CommonService){}

  onLogout() {
    this.commonServ.logout()
  }
}
