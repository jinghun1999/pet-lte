import { BoardRoutingModule } from './board-routing.module';

describe('BoardRoutingModule', () => {
  let boardRoutingModule: BoardRoutingModule;

  beforeEach(() => {
    boardRoutingModule = new BoardRoutingModule();
  });

  it('should create an instance', () => {
    expect(boardRoutingModule).toBeTruthy();
  });
});
