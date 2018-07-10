import { SubsModule } from './subs.module';

describe('SubsModule', () => {
  let subsModule: SubsModule;

  beforeEach(() => {
    subsModule = new SubsModule();
  });

  it('should create an instance', () => {
    expect(subsModule).toBeTruthy();
  });
});
