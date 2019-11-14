import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageNotFound404Component } from './about-page-not-found404.component';

describe('AboutPageNotFound404Component', () => {
  let component: AboutPageNotFound404Component;
  let fixture: ComponentFixture<AboutPageNotFound404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageNotFound404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageNotFound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
