import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  nome: String = 'Fulano';

  getValor() {
    return 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
