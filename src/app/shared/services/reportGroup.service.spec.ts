import { TestBed, inject } from '@angular/core/testing';

import { ReportGroupService } from './reportGroup.service';

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportGroupService]
    });
  });

  it('should be created', inject([ReportGroupService], (service: ReportGroupService) => {
    expect(service).toBeTruthy();
  }));
});
