import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  declarations: [RegistroComponent],
  exports: [RegistroComponent],
})
export class RegistroModule {}
