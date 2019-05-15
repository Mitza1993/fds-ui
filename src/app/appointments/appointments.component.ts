import { DATA_SET } from './../dataset';
import { AppointmentEditorComponent } from './appointment-editor/appointment-editor.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  preserveWhitespaces: true
})
export class AppointmentsComponent implements OnInit {
  @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
  employeesFormControl = new FormControl();
  appointmentsData;
  selectedEmployee: any;
  employees;
  currentDate: Date = new Date(2017, 4, 22);
  editingOptions : boolean = false;

  constructor(public route: ActivatedRoute, public dialog: MatDialog) {
   }

  ngOnInit() {
    this.employees = DATA_SET.users.filter(user => user.role === 'employee');

    this.route.data.forEach(data => {
      if (data.employee) {
        this.selectedEmployee = [data.employee];
        this.appointmentsData = DATA_SET.appointments.filter((appointment) => {
          return appointment.ownerId === data.employee.id;
        });
      } else {
        this.appointmentsData = DATA_SET.appointments;
      }
    });
  }

  onAppointmentDblClick(e) {
    e.cancel = true; //disabled default form editor
    this.openDialog(e.appointmentData);
  }

  onCellClick(e) {
    let appointment: any = {};
    if(e.cellData) {
      appointment.startDate = e.cellData.startDate;
      appointment.endDate = e.cellData.endDate;
    }
    this.openDialog(appointment);
  }

  updateAppointments(data) {
    const filtered = DATA_SET.appointments.filter((el) => {
      return data.some((f) => {
        return f.id === el.ownerId;
      });
    });
    this.appointmentsData = filtered;
  }

  deleteAppointment(appointment) {
    // if userRole === client
    this.scheduler.instance.hideAppointmentTooltip();
    this.scheduler.instance.deleteAppointment(this.appointmentsData.find(app => app.ownerId === appointment.ownerId));
  }
  openDialog(data) {
    this.scheduler.instance.hideAppointmentTooltip();
    const dialogRef = this.dialog.open(AppointmentEditorComponent, {
      width: '350px',
      data: {
        appointment: data,
        employees: this.employees
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
