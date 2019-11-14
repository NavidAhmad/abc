import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnProfesionalValuesComponent } from './hcn-profesional-values.component';

describe('HcnProfesionalValuesComponent', () => {
  let component: HcnProfesionalValuesComponent;
  let fixture: ComponentFixture<HcnProfesionalValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnProfesionalValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnProfesionalValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
