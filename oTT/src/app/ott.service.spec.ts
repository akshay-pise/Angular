import { TestBed } from '@angular/core/testing';

import { OttService } from './ott.service';

describe('OttService', () => {
  let service: OttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
