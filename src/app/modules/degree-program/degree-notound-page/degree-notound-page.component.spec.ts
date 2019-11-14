import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeNotoundPageComponent } from './degree-notound-page.component';

describe('DegreeNotoundPageComponent', () => {
  let component: DegreeNotoundPageComponent;
  let fixture: ComponentFixture<DegreeNotoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeNotoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeNotoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
