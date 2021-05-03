import { Component, OnInit } from '@angular/core';
import { EmpresaGrande } from './EmpresaGrande';
import { InformacionEmpresasService } from './informacionEmpresas.service';

@Component({
  selector: 'app-empresaGrande',
  templateUrl: './empresaGrande.component.html',
  styleUrls: ['./empresaGrande.component.css'],
})
export class EmpresaGrandeComponent implements OnInit {
  empresa: EmpresaGrande;
  constructor(public infoEmpresa: InformacionEmpresasService) {
    this.empresa = infoEmpresa.info;
  }
  ngOnInit() {}
}
