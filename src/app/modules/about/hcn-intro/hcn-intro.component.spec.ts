import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnIntroComponent } from './hcn-intro.component';

describe('HcnIntroComponent', () => {
  let component: HcnIntroComponent;
  let fixture: ComponentFixture<HcnIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
