import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  booleanvalue:boolean=true
  isClassAdded:boolean=false
  booleancheck(){
    this.booleanvalue= !this.booleanvalue
    this.isClassAdded=!this.isClassAdded
    console.log(this.booleanvalue);
    console.log(this.isClassAdded);
  }
}
