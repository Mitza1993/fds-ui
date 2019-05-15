import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AuthGuard } from './user/auth.guard';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AppointmentResolver} from './appointments/appointment-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'appointments/:id', component: AppointmentsComponent, resolve: {employee: AppointmentResolver}},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
