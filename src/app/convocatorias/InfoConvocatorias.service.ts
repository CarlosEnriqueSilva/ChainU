import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convocatoria } from './Convocatoria';

@Injectable({
  providedIn: 'root',
})
export class InfoConvocatoriasService {
  convocas: Convocatoria[];
  cargada = false;
  constructor(private http: HttpClient) {
    console.log('Servicio Corriendo');
    http
      .get('../../assets/jsons/InfoConvocatorias.json')
      .subscribe((resp: Convocatoria[]) => {
        this.convocas = resp;
        this.cargada = true;
        console.log(this.convocas);
      });
  }
}
