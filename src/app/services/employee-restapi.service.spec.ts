import { TestBed, inject } from '@angular/core/testing';

import { EmployeeRestapiService } from './employee-restapi.service';

describe('EmployeeRestapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeRestapiService]
    });
  });

  it('should be created', inject([EmployeeRestapiService], (service: EmployeeRestapiService) => {
    expect(service).toBeTruthy();
  }));
});
