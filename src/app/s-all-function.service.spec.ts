import { TestBed } from '@angular/core/testing';

import { SAllFunctionService } from './s-all-function.service';

describe('SAllFunctionService', () => {
  let service: SAllFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAllFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
