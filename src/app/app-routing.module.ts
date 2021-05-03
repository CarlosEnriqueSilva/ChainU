import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaPequenaComponent } from './empresaPequena/empresaPequena.component';
import { EmpresaGrandeComponent } from './empresaGrande/empresaGrande.component';
import { RegistroComponent } from './registro/registro.component';
import { PymesComponent } from './pymes/pymes.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'feedpeque', component: ConvocatoriasComponent },
  { path: 'empresapeque', component: EmpresaPequenaComponent },
  { path: 'empresagrand', component: EmpresaGrandeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'feedgrand', component: PymesComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
