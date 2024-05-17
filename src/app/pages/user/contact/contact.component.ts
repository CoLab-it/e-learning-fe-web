import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/common/header/header.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { InputComponent } from '../../../components/common/input/input.component';
import { ButtonComponent } from '../../../components/common/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InputComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
