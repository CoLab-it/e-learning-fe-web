import { Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';
import { HomeComponent } from './pages/user/home/home.component';
import { userhomeGuard } from './guards/userhome.guard';
import { loginGuard } from './guards/login.guard';
import { CoursesComponent } from './pages/user/courses/courses.component';

export const routes: Routes = [
    {
        path:'',
        canActivate:[loginGuard],
        component:SignupComponent
    },
    {
        path:'signup',
        canActivate:[loginGuard],
        component:SignupComponent
    },
    {
        path:'login',
        canActivate:[loginGuard],
        component:LoginComponent
    },
    {
        path:'userhome',
        canActivate:[userhomeGuard],
        component:HomeComponent
    },
    {
        path: 'user/courses',
        component: CoursesComponent
    },

];
