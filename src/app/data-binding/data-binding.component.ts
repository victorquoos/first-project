import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  valorDigitado: String = '';
  isMouseOver: Boolean = false;

  clique() {
    alert('ação do botão');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorDigitado = (<HTMLInputElement>evento.target).value;
  }

  onMouseOver() {
    this.isMouseOver = true;
  }

  onMouseOut() {
    this.isMouseOver = false;
  }

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
