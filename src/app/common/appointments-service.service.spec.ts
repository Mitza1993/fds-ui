import { TestBed } from '@angular/core/testing';

import { AppointmentsServiceService } from './appointments-service.service';

describe('AppointmentsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentsServiceService = TestBed.get(AppointmentsServiceService);
    expect(service).toBeTruthy();
  });
});
