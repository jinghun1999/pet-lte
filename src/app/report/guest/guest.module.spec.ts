import { GuestModule } from './guest.module';

describe('MemberModule', () => {
  let memberModule: GuestModule;

  beforeEach(() => {
    memberModule = new GuestModule();
  });

  it('should create an instance', () => {
    expect(memberModule).toBeTruthy();
  });
});
