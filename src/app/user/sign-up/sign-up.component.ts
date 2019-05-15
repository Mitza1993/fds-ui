import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  address: FormControl;
  phone: FormControl;
  email: FormControl;
  password: FormControl;
  bio: FormControl;
  uploadedImage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);
    this.address = new FormControl('');
    this.bio = new FormControl('');

    this.signUpForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      email: this.email,
      password: this.password,
      bio: this.bio
    });
  }

  signUp(formValues) {
   this.authService.signUp(formValues);
  }

  cancel() {
    this.router.navigate(['dashboard']);
  }
}
