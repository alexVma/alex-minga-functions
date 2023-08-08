import { Component } from '@angular/core';
import { MisFunciones } from './utils/mis-funciones';
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html', 
  template: `
  <div>
    <h1>Resultados de MisFunciones</h1>
    <p><b>concatenar Alex y Minga String:</b> {{ concatenated }}</p>
    <p><b>el promedio de 3 6 9:</b> {{ average }}</p>
    <p><b>verificar si la frase "Alex Minga" tiene vocales:</b> {{ hasVowels }}</p>
  </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alex-minga-functions';
  concatenated: string;
  average: number;
  hasVowels: boolean;
  constructor() {
    const misFunciones = new MisFunciones();

    this.concatenated = misFunciones.concatenarStrings('Alex ', 'Minga');
    this.average = misFunciones.calcularPromedio(3, 6, 9);
    this.hasVowels = misFunciones.verificarVocales('Alex Minga');

    console.log('concatenar Alex y Minga String:', this.concatenated);

    console.log('el promedio de 3 6 9:', this.average);

    console.log('verificar si la frase "Alex Minga" tiene vocales:', this.hasVowels);
  }

}
