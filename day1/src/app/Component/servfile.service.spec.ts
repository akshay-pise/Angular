import { TestBed } from '@angular/core/testing';

import { ServfileService } from './servfile.service';

describe('ServfileService', () => {
  let service: ServfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
