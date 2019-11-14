import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcnVissionComponent } from './hcn-vission.component';

describe('HcnVissionComponent', () => {
  let component: HcnVissionComponent;
  let fixture: ComponentFixture<HcnVissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcnVissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcnVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
