import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pyme } from './Pyme';

@Injectable({
  providedIn: 'root',
})
export class InfoPymesService {
  pymes: Pyme[];
  cargada = false;
  constructor(private http: HttpClient) {
    console.log('Servicio Corriendo');
    http
      .get('../../assets/jsons/InfoEmpresas.json')
      .subscribe((resp: Pyme[]) => {
        this.pymes = resp;
        this.cargada = true;
        console.log(this.pymes);
      });
  }
}
