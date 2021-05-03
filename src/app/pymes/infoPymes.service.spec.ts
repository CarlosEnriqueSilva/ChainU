/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoPymesService } from './infoPymes.service';

describe('Service: InfoPymes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoPymesService]
    });
  });

  it('should ...', inject([InfoPymesService], (service: InfoPymesService) => {
    expect(service).toBeTruthy();
  }));
});
