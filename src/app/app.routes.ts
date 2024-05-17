import { Routes } from '@angular/router';
import { LoginComponent } from './pages/common/login/login.component';
import { SignupComponent } from './pages/common/signup/signup.component';
import { HomeComponent } from './pages/user/home/home.component';
import { userhomeGuard } from './guards/userhome.guard';
import { loginGuard } from './guards/login.guard';
import { CoursesComponent } from './pages/user/courses/courses.component';
import { CourseDetailComponent } from './pages/user/course-detail/course-detail.component';
import { UserAccountComponent } from './pages/user/user-account/user-account.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserLearningComponent } from './components/user/user-learning/user-learning.component';
import { UserCartComponent } from './components/user/user-cart/user-cart.component';
import { UserWishlistComponent } from './components/user/user-wishlist/user-wishlist.component';
import { ContactComponent } from './pages/user/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [loginGuard],
    component: SignupComponent,
  },
  {
    path: 'signup',
    canActivate: [loginGuard],
    component: SignupComponent,
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    component: LoginComponent,
  },
  {
    path: 'userhome',
    canActivate: [userhomeGuard],
    component: HomeComponent,
  },
  {
    path: 'user/courses',
    component: CoursesComponent,
  },
  {
    path: 'user/courses/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'user/contact',
    component: ContactComponent,
  },
  {
    path: 'user/myAccount',
    component: UserAccountComponent,
    children: [
      { path: '', component: UserProfileComponent },
      { path: 'myLearning', component: UserLearningComponent },
      { path: 'cart', component: UserCartComponent },
      { path: 'wishlist', component: UserWishlistComponent },
    ],
  },
];
