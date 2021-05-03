import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasComponent } from './convocatorias.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChildProcessModule } from 'ngx-childprocess';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxChildProcessModule],
  declarations: [ConvocatoriasComponent],
  exports: [ConvocatoriasComponent],
})
export class ConvocatoriasModule {}
