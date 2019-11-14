import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBsnComponent } from './generic-bsn.component';

describe('GenericBsnComponent', () => {
  let component: GenericBsnComponent;
  let fixture: ComponentFixture<GenericBsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericBsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
