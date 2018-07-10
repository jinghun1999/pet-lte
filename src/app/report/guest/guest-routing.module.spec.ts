import { GuestRoutingModule } from './guest-routing.module';

describe('MemberRoutingModule', () => {
  let memberRoutingModule: GuestRoutingModule;

  beforeEach(() => {
    memberRoutingModule = new GuestRoutingModule();
  });

  it('should create an instance', () => {
    expect(memberRoutingModule).toBeTruthy();
  });
});
