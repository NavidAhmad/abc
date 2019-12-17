import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionToPostRNComponent } from './admission-to-post-rn.component';

describe('AdmissionToPostRNComponent', () => {
  let component: AdmissionToPostRNComponent;
  let fixture: ComponentFixture<AdmissionToPostRNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionToPostRNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionToPostRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
