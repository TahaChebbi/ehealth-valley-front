import { TestBed } from '@angular/core/testing';

import { GrossisteService } from './grossiste.service';

describe('GrossisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrossisteService = TestBed.get(GrossisteService);
    expect(service).toBeTruthy();
  });
});
