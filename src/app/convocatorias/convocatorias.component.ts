import { Component, OnInit } from '@angular/core';
import { Convocatoria } from './Convocatoria';
import { dataConvocatorias } from './dataConvocatorias';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css'],
})
export class ConvocatoriasComponent implements OnInit {
  constructor() {}
  convocatorias: Array<Convocatoria>;
  getListaConvoca(): Array<Convocatoria> {
    return dataConvocatorias;
  }
  ngOnInit() {
    this.convocatorias = this.getListaConvoca();
  }
}
