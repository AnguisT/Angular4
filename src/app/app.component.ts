import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  menu1 = 'Home';
  menu2 = 'Country';

  constructor(private router: Router) {}

  onSelect() {
    // this.router.navigate(['/country']);
  }
}
