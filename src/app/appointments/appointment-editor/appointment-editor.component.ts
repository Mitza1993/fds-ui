import { DATA_SET } from './../../dataset';
import { AppointmentsComponent } from './../appointments.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-appointment-editor',
  templateUrl: './appointment-editor.component.html',
  styleUrls: ['./appointment-editor.component.scss']
})
export class AppointmentEditorComponent implements OnInit {
  selectedEmployee: any = {};
  startHour: string = '';
  endHour: string = '';
  description: string = 'Programare noua';
  services: Array<any> = [];
  appointmentForm: FormGroup;
  disableSelection: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AppointmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb : FormBuilder) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    if(this.data.appointment.ownerId) {
      this.disableSelection = true;
      this.selectedEmployee = this.data.employees.find(employee =>
        employee.id === this.data.appointment.ownerId);
      this.startHour =  this.getTime(this.data.appointment.startDate);
      this.endHour =  this.getTime(this.data.appointment.endDate);
      this.services = DATA_SET.services.filter(service => service.employee_id === this.selectedEmployee.id);
    } else {
      this.data.appointment.description = this.description;
    }
    let controlGroupsArr = [];
    for(var i = 0; i < this.services.length; i++) {
      controlGroupsArr.push(this.fb.group({
        id: this.services[i].id,
        name: this.services[i].name,
        duration_interval: this.services[i].duration_interval,
        price: this.services[i].price,
        checked: false
      }))
    }
    if(this.data.appointment.serviceIds) {
      controlGroupsArr.map(controlGroup => {
        if(this.data.appointment.servicesIds.find(id => id === controlGroup.controls.id.value)) {
          controlGroup.controls.checked.value = true;
        }
      });
    }
    this.appointmentForm = this.fb.group({
      hourGroup: this.fb.group({
        startHour: [this.startHour, [Validators.required]],
        endHour: [this.endHour, Validators.required],
      }),
        selectedEmployee: [ this.selectedEmployee, Validators.required],
        services: this.fb.array(controlGroupsArr)
    });
  }

  buildServices(services): FormGroup {
    let formGroupArray = [];
    for(let prop in services) {
      formGroupArray.push({
        [prop]: services[prop]
      })
    }
    return this.fb.group({
    });
  }

  getTime(value) : string {
    const h = this.addZero(value.getHours());
    const m = this.addZero(value.getMinutes());
    const s = this.addZero(value.getSeconds());
    return h + ":" + m + ":" + s;
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  selectionChange(event) {
    let controlGroupsArr = [];
    this.selectedEmployee = event;
    this.services = DATA_SET.services.filter(service => service.employee_id === this.selectedEmployee.id);
    for(var i = 0; i < this.services.length; i++) {
      controlGroupsArr.push(this.fb.group({
        id: this.services[i].id,
        name: this.services[i].name,
        duration_interval: this.services[i].duration_interval,
        price: this.services[i].price,
        checked: false
      }))
    }
    if(this.data.appointment.serviceIds) {
      controlGroupsArr.map(controlGroup => {
        if(this.data.appointment.servicesIds.find(id => id === controlGroup.controls.id.value)) {
          controlGroup.controls.checked.value = true;
          for(var prop in controlGroup.controls) {
            controlGroup.controls[prop].updateValueAndValidity();
          }
        }
      });
    }
    this.appointmentForm.setControl('services', this.fb.array(controlGroupsArr));
  }

  save() {
    console.log(this.appointmentForm);
    console.log('Saved: ' + this.appointmentForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }

}
