import { TestBed } from '@angular/core/testing';

import { DateandTimeServiceService } from './dateand-time-service.service';

describe('DateandTimeServiceService', () => {
  let service: DateandTimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateandTimeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
