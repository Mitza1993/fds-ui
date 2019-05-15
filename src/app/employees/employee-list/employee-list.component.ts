import { DATA_SET } from './../../dataset';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: any[];
  constructor() { }

  ngOnInit() {
    this.employees = DATA_SET.users.filter(user => user.role === 'employee');
  }

}
