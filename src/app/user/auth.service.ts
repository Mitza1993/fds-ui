import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_SET } from '../dataset';
import { AuthService as SocialAuthService} from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;

  constructor(private router: Router, private socialAuthService: SocialAuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));

    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        this.router.navigate(['appointments']);
      } else {
        this.router.navigate(['dashboard']); // navigate to 404 page || register page
      }
    });
  }

  signIn(email, password, provider) {
    if (!provider) {
      // email login performed
      // make a request to our custom Auth API and return the user { email, password } => user
      this.currentUser = DATA_SET.users.find(user => user.email === email);
      if (this.currentUser) {
          switch(this.currentUser.role) {
            case 'admin': this.router.navigate(['statistics']);
            case 'client': this.router.navigate(['appointments'])
            // case 'employee': this.router.navigate(['employee/profile'])
          }
      } else {
        this.router.navigate(['dashboard']); // navigate to 404 page || register page
      }
    } else {
      // perform social media login
      this.socialAuthService.signIn(provider);
    }
  }

  signUp(newUser) {
    console.log(newUser);
    // store user in database
    // notify user on email about his registration
    this.currentUser = newUser;
    this.router.navigate(['appointments']);
  }

  signOut() {
    this.currentUser = null;
    localStorage.setItem('user', this.currentUser);
    this.socialAuthService.signOut();
    this.router.navigate(['dashboard']);
  }

  isAuthenticated() {
      return !!this.currentUser;
  }
}
