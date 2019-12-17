import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAffliationComponent } from './membership-affliation.component';

describe('MembershipAffliationComponent', () => {
  let component: MembershipAffliationComponent;
  let fixture: ComponentFixture<MembershipAffliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipAffliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipAffliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
