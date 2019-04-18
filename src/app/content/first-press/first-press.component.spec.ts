import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPressComponent } from './first-press.component';

describe('FirstPressComponent', () => {
  let component: FirstPressComponent;
  let fixture: ComponentFixture<FirstPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
