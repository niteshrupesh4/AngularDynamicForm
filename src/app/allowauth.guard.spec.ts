import { TestBed } from '@angular/core/testing';

import { AllowauthGuard } from './allowauth.guard';

describe('AllowauthGuard', () => {
  let guard: AllowauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
