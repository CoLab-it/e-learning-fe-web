import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

export const loginGuard: CanActivateFn = (route, state) => {

  const token = inject(CommonService).tockendecode()
  if(!token){
    return true
  } else if (token && token.type=='user'){
    inject(Router).navigate(['userhome'])
  } else if (token && token.type=='admin'){
    inject(Router).navigate(['adminhome'])
  }
  return false;
};
