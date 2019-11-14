import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnHomeComponent } from './hcn-home.component';

describe('HcnHomeComponent', () => {
  let component: HcnHomeComponent;
  let fixture: ComponentFixture<HcnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
