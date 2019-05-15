import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
//custom imports
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { userRoutes } from './user.routes';
import { environment } from './../../environments/environment';
//fontawesome imports
import { faFacebook, faGoogle, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//angular material
import {
  MatMenuModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
//font awesome config
library.add(faFacebook, faGoogle, faFacebookF, faTwitter);

@NgModule({
  declarations: [LoginComponent, SignUpComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, RouterModule.forChild(userRoutes),
    MatMenuModule,
    MatInputModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    FontAwesomeModule
  ],
  providers: []
})
export class UserModule { }
