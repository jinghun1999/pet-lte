import { ReportBranchNavModule } from './report-branch-nav.module';

describe('ReportBranchNavModule', () => {
  let reportBranchNavModule: ReportBranchNavModule;

  beforeEach(() => {
    reportBranchNavModule = new ReportBranchNavModule();
  });

  it('should create an instance', () => {
    expect(reportBranchNavModule).toBeTruthy();
  });
});
