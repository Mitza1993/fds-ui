import { NavbarItem } from './navbar-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: NavbarItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        id: 0,
        name: 'Despre',
        selected: false
      },
      {
        id: 1,
        name: 'Servicii',
        selected: false
      },
      {
        id: 2,
        name: 'Angajati',
        selected: false
      },
      {
        id: 3,
        name: 'Contact',
        selected: false
      }
    ];
  }

}
