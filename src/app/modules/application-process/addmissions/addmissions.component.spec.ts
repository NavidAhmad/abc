import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissionsComponent } from './addmissions.component';

describe('AddmissionsComponent', () => {
  let component: AddmissionsComponent;
  let fixture: ComponentFixture<AddmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
