import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';
import { EmpresaGrandeModule } from './empresaGrande/empresaGrande.module';
import { EmpresaPequenaModule } from './empresaPequena/empresaPequena.module';
import { LandingModule } from './landing/landing.module';
import { RegistroModule } from './registro/registro.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PymesModule } from './pymes/pymes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConvocatoriasModule,
    LandingModule,
    RegistroModule,
    EmpresaGrandeModule,
    EmpresaPequenaModule,
    HttpClientModule,
    AppRoutingModule,
    PymesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
