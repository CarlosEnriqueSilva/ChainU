/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoConvocatoriasService } from './InfoConvocatorias.service';

describe('Service: InfoConvocatorias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoConvocatoriasService]
    });
  });

  it('should ...', inject([InfoConvocatoriasService], (service: InfoConvocatoriasService) => {
    expect(service).toBeTruthy();
  }));
});
