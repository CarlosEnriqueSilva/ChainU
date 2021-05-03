/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InformacionEmpresasService } from './informacionEmpresas.service';

describe('Service: InformacionEmpresas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionEmpresasService]
    });
  });

  it('should ...', inject([InformacionEmpresasService], (service: InformacionEmpresasService) => {
    expect(service).toBeTruthy();
  }));
});
