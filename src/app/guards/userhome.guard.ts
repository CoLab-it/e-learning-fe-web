import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

export const userhomeGuard: CanActivateFn = (route, state) => {

  const token =inject(CommonService).tockendecode()
  if(token && token.type =='user'){
    return true
    
  } else if (token && token.type =='admin'){
    inject(Router).navigate(['adminhome'])
    return true
  } else {
    inject(Router).navigate(['login'])
    return true
  }
};
