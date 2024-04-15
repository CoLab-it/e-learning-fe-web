import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

      tockendecode(){
        console.log('minz');
        
      const token= localStorage.getItem('token')
      if (!token) {
        return;
      }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      
      return JSON.parse(window.atob(base64));
    }
}


