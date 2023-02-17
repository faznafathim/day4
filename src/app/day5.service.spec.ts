import { TestBed } from '@angular/core/testing';

import { Day5Service } from './day5.service';

describe('Day5Service', () => {
  let service: Day5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Day5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
