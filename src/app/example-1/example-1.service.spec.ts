import { TestBed } from '@angular/core/testing';

import { Example1Service } from './example-1.service';

describe('Example1Service', () => {
  let service: Example1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
