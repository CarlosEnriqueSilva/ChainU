import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxChildProcessModule } from 'ngx-childprocess';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxChildProcessModule],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
