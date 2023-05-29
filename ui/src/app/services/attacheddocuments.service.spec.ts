import { TestBed } from '@angular/core/testing';

import { AttacheddocumentsService } from './attacheddocuments.service';

describe('AttacheddocumentsService', () => {
  let service: AttacheddocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttacheddocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
