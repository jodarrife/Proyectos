import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Docente = [
      {
        id: 11, Tipo_Documento: "CEDULA",
        Identificacion: "1003242276",
        Primer_Nombre: "JORGE",
        Segundo_Nombre: "DANIEL",
        Primer_Apellido: "RINCONES",
        Segundo_Apellido: "FERNANDEZ",
        Fecha_Nacimiento: "3/11/2000",
        Edad: 19,
        Genero: "MASCULINO",
        Email: "jodarrife12@gmail.com",
        Telefono: "3004128610",
        Cargo: "DOCENTE",
        Fecha_Vinculacion: "3/11/2019",
        EstadoSys: 'ACTIVO',
        Tipo_Docente: 'CATEDRATICO'
      }
    ];
    return { Docente };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(docentes: Docente[]): number {
    return docentes.length > 0 ? Math.max(...docentes.map(docente => docente.id)) + 1 : 11;
  }
}