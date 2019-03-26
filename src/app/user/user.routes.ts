import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const userRoutes = [
    { path: 'profile', component: SignUpComponent},
    { path: 'login', component: LoginComponent}
];
