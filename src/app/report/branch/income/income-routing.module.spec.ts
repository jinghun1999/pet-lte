import { IncomeRoutingModule } from './income-routing.module';

describe('IncomeRoutingModule', () => {
  let incomeRoutingModule: IncomeRoutingModule;

  beforeEach(() => {
    incomeRoutingModule = new IncomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(incomeRoutingModule).toBeTruthy();
  });
});
