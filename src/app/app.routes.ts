import { Routes } from '@angular/router';
import { SignupComponent } from './pages/common/signup/signup.component';
import { LoginComponent } from './pages/common/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';

export const routes: Routes = [
    {
        path:'',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'header',
        component:FooterComponent
    }

];
