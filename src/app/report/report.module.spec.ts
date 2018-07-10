import { ReportModule } from './report.module';

describe('DashboardModule', () => {
  let dashboardModule: ReportModule;

  beforeEach(() => {
    dashboardModule = new ReportModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
