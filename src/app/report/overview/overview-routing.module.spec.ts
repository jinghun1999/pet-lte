import { OverviewRoutingModule } from './overview-routing.module';

describe('DashboardRoutingModule', () => {
  let dashboardRoutingModule: OverviewRoutingModule;

  beforeEach(() => {
    dashboardRoutingModule = new OverviewRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardRoutingModule).toBeTruthy();
  });
});
