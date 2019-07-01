import { TestBed } from '@angular/core/testing';

import { AproposService } from './apropos.service';

describe('AproposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AproposService = TestBed.get(AproposService);
    expect(service).toBeTruthy();
  });
});
