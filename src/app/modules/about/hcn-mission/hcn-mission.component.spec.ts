import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnMissionComponent } from './hcn-mission.component';

describe('HcnMissionComponent', () => {
  let component: HcnMissionComponent;
  let fixture: ComponentFixture<HcnMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
