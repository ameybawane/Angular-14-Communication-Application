import { TestBed } from '@angular/core/testing';

import { GaurdUserGuard } from './gaurd-user.guard';

describe('GaurdUserGuard', () => {
  let guard: GaurdUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GaurdUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
