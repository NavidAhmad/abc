import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHCNComponent } from './why-hcn.component';

describe('WhyHCNComponent', () => {
  let component: WhyHCNComponent;
  let fixture: ComponentFixture<WhyHCNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHCNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
