import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBranchNavComponent } from './report-branch-nav.component';

describe('ReportBranchNavComponent', () => {
  let component: ReportBranchNavComponent;
  let fixture: ComponentFixture<ReportBranchNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBranchNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBranchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
