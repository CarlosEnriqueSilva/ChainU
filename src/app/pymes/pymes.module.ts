import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PymesComponent } from './pymes.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChildProcessModule } from 'ngx-childprocess';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxChildProcessModule],
  declarations: [PymesComponent],
  exports: [PymesComponent],
})
export class PymesModule {}
