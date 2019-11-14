import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnObjectivesComponent } from './hcn-objectives.component';

describe('HcnObjectivesComponent', () => {
  let component: HcnObjectivesComponent;
  let fixture: ComponentFixture<HcnObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
