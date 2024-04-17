import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
