import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {
  listaCurso: string[] = ['Typescript', 'Javascript', 'CSS', 'Java','C#'];

  constructor(){}
}
