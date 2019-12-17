import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionToGenericBSNComponent } from './admission-to-generic-bsn.component';

describe('AdmissionToGenericBSNComponent', () => {
  let component: AdmissionToGenericBSNComponent;
  let fixture: ComponentFixture<AdmissionToGenericBSNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionToGenericBSNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionToGenericBSNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
