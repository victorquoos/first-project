import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-comp',
  templateUrl: './primeiro-comp.component.html',
  styleUrls: ['./primeiro-comp.component.scss'],
})
export class PrimeiroCompComponent {
  private nome: string;
  anoNascimento: number;

  constructor() {
    this.nome = 'Fulano';
    this.anoNascimento = 1980;
  }

  idade() {
    return 2023 - this.anoNascimento;
  }

  ngOnInit(): void {
    console.log('Nome: ' + this.nome);
    console.log('Idade: ' + this.idade());
    this.mostrarIdade();
    console.log('Soma: ' + this.somar(10, 20));
    console.log('Maior valor: ' + this.maiorValor(10, 20));
  }

  mostrarIdade() {
    var mensagem: string;
    mensagem = 'Nome: ' + this.nome + '\n';
    mensagem += 'Idade: ' + this.idade();
    alert(mensagem);
  }

  somar(n1: number, n2: number) {
    return n1 + n2;
  }

  maiorValor(n1: number, n2: number) {
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
  }
}
