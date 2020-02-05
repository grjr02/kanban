import { TestBed } from '@angular/core/testing';

import { CompletedtasksService } from './completedtasks.service';

describe('CompletedtasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedtasksService = TestBed.get(CompletedtasksService);
    expect(service).toBeTruthy();
  });
});
