import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionProcessNotFoundComponent } from './admission-process-not-found.component';

describe('AdmissionProcessNotFoundComponent', () => {
  let component: AdmissionProcessNotFoundComponent;
  let fixture: ComponentFixture<AdmissionProcessNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionProcessNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionProcessNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
