import { Component } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Meu primeiro App';
  nomes: String[];

  constructor(testService: TesteService) {
    this.nomes = testService.getNomes();
  }
}
