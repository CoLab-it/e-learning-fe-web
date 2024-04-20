import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common.service";

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const token = localStorage.getItem('token');
  const currentTime =  Date.now() / 1000;
  if (token) {
    const decodedToken = inject(CommonService).tockendecode()
    if(decodedToken.exp < currentTime){
      alert('Your JWT has been expired. Please login again')
      inject(CommonService).logout();
      
    }
    const cloned = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(cloned);
    return next(cloned);
  } else {
    return next(req);
  }
};