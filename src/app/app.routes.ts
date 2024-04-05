import { Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';
import { HomeComponent } from './pages/user/home/home.component';
import { ButtonLoadingComponent } from './components/common/button-loading/button-loading.component';

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
    {
        path:'userhome',
        component:HomeComponent
    },
    {
        path:'buttonloading',
        component:ButtonLoadingComponent
    },

];
