import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCreteriaComponent } from './selection-creteria.component';

describe('SelectionCreteriaComponent', () => {
  let component: SelectionCreteriaComponent;
  let fixture: ComponentFixture<SelectionCreteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCreteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
