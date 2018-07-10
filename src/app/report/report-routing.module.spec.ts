import { ReportRoutingModule } from './report-routing.module';

describe('DashboardRoutingModule', () => {
  let dashboardRoutingModule: ReportRoutingModule;

  beforeEach(() => {
    dashboardRoutingModule = new ReportRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardRoutingModule).toBeTruthy();
  });
});
