import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { EmpresaGrandeModule } from './empresaGrande/empresaGrande.module';
import { EmpresaPequenaModule } from './empresaPequena/empresaPequena.module';
import { LandingModule } from './landing/landing.module';
import { RegistroModule } from './registro/registro.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConvocatoriasModule,
    LandingModule,
    RegistroModule,
    EmpresaGrandeModule,
    EmpresaPequenaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
