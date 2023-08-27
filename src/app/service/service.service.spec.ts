import { TestBed } from '@angular/core/testing';

import { ServiceNewService } from './service.service';

describe('ServiceNewService', () => {
  let service: ServiceNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
