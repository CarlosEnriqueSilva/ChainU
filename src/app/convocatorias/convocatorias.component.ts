import { Component, OnInit } from '@angular/core';
import { InfoConvocatoriasService } from './InfoConvocatorias.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css'],
})
export class ConvocatoriasComponent implements OnInit {
  constructor(public infoConvocatorias: InfoConvocatoriasService) {}
  goPython() {}
  ngOnInit() {}
}
