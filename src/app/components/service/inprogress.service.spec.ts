import { TestBed } from '@angular/core/testing';

import { InprogressService } from './inprogress.service';

describe('InprogressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InprogressService = TestBed.get(InprogressService);
    expect(service).toBeTruthy();
  });
});
