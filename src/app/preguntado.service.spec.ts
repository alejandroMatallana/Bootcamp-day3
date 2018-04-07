import { TestBed, inject } from '@angular/core/testing';

import { PreguntadoService } from './preguntado.service';

describe('PreguntadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreguntadoService]
    });
  });

  it('should be created', inject([PreguntadoService], (service: PreguntadoService) => {
    expect(service).toBeTruthy();
  }));
});
