import { SubsRoutingModule } from './subs-routing.module';

describe('SubsRoutingModule', () => {
  let subsRoutingModule: SubsRoutingModule;

  beforeEach(() => {
    subsRoutingModule = new SubsRoutingModule();
  });

  it('should create an instance', () => {
    expect(subsRoutingModule).toBeTruthy();
  });
});
