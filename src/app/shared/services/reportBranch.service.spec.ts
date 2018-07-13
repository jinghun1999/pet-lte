import { TestBed, inject } from '@angular/core/testing';

import { ReportBranchService } from './reportBranch.service';

describe('BranchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportBranchService]
    });
  });

  it('should be created', inject([ReportBranchService], (service: ReportBranchService) => {
    expect(service).toBeTruthy();
  }));
});
