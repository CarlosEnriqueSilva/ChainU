import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaGrandeComponent } from './empresaGrande.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EmpresaGrandeComponent],
  exports: [EmpresaGrandeComponent],
})
export class EmpresaGrandeModule {}
