import { OverviewModule } from './overview.module';

describe('DashboardModule', () => {
  let dashboardModule: OverviewModule;

  beforeEach(() => {
    dashboardModule = new OverviewModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
