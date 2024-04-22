import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private router: Router) {}

  tockendecode() {
    console.log('minz');

    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  }

  logout(){
    const token = localStorage.getItem('token')
    if(token){
      localStorage.clear()
    }
    this.router.navigate(['/login'])
  }
}
