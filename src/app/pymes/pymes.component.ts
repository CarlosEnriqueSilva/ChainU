import { Component, OnInit } from '@angular/core';
import { InfoPymesService } from './infoPymes.service';

@Component({
  selector: 'app-pymes',
  templateUrl: './pymes.component.html',
  styleUrls: ['./pymes.component.css'],
})
export class PymesComponent implements OnInit {
  constructor(public infoPymes: InfoPymesService) {}

  ngOnInit() {}
}
