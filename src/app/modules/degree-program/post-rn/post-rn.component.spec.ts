import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRNComponent } from './post-rn.component';

describe('PostRNComponent', () => {
  let component: PostRNComponent;
  let fixture: ComponentFixture<PostRNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
