import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHCNComponent } from './explore-hcn.component';

describe('ExploreHCNComponent', () => {
  let component: ExploreHCNComponent;
  let fixture: ComponentFixture<ExploreHCNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreHCNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreHCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
