import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  cursos: string[] = ['Angular', 'React', 'Vue'];
  mostrarCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
