import { TestBed, inject } from '@angular/core/testing';

import { ReportService } from './report.service';

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportService]
    });
  });

  it('should be created', inject([ReportService], (service: ReportService) => {
    expect(service).toBeTruthy();
  }));
});
