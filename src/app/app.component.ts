import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable , of} from 'rxjs';
import { Angajat } from './models/angajat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor()  {
  }

  printUser(event) {

  }
}
