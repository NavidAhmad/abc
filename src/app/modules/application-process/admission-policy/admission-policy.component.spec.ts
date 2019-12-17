import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPolicyComponent } from './admission-policy.component';

describe('AdmissionPolicyComponent', () => {
  let component: AdmissionPolicyComponent;
  let fixture: ComponentFixture<AdmissionPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
