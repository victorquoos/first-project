import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  nome: String = 'Fulano';
  url: String =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png';
  esconderTexto: Boolean = true;

  getValor() {
    return 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
