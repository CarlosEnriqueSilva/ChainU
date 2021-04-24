import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvocatoriasModule } from './convocatorias/convocatorias.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConvocatoriasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
