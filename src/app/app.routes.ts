import { Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';

export const routes: Routes = [
    {
        path:'',
        component:SignupComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    },

];
