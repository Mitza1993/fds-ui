//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//custom imports
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './user/auth.guard';
import { AppointmentResolver } from './appointments/appointment-resolver.service';
//custom components imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
//DevExtreme imports
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
//angular material imports
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatDialogModule,
  MatCheckboxModule
} from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// calendar imports
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//image gallery import
import { NgxImageGalleryModule } from 'ngx-image-gallery';
//auth APIs imports
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { AppointmentEditorComponent } from './appointments/appointment-editor/appointment-editor.component';
//auth configurations
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('105152447642-7hr2852uuqc0o5p3k9018va704dk4bah.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('331994257508264')
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    AppointmentsComponent,
    EmployeeCardComponent,
    EmployeeListComponent,
    AppointmentEditorComponent,
  ],
  entryComponents: [AppointmentEditorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DxTemplateModule,
    DxSchedulerModule,
    NgxImageGalleryModule,
    AppRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
  providers: [AuthGuard, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
  AppointmentResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
