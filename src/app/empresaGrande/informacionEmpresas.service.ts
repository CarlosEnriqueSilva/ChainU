import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpresaGrande } from './EmpresaGrande';

@Injectable({
  providedIn: 'root',
})
export class InformacionEmpresasService {
  info: EmpresaGrande;
  cargada = false;
  constructor(private http: HttpClient) {
    console.log('Servicio Corriendo');
    http
      .get('../../assets/jsons/InfoEmpresas.json')
      .subscribe((resp: EmpresaGrande) => {
        this.info = resp;
        this.cargada = true;
        console.log(this.info);
      });
  }
}
