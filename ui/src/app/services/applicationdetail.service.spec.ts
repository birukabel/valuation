import { TestBed } from '@angular/core/testing';

import { ApplicationdetailService } from './applicationdetail.service';

describe('ApplicationdetailService', () => {
  let service: ApplicationdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
