import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  meuFavorito: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
}
