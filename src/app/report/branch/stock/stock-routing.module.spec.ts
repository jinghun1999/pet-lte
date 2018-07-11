import { StockRoutingModule } from './stock-routing.module';

describe('StockRoutingModule', () => {
  let stockRoutingModule: StockRoutingModule;

  beforeEach(() => {
    stockRoutingModule = new StockRoutingModule();
  });

  it('should create an instance', () => {
    expect(stockRoutingModule).toBeTruthy();
  });
});
