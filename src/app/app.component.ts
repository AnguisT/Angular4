import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  menu1 = 'О нас';
  menu2 = 'Оплата и доставка';
  menu3 = 'Контакты';
}
