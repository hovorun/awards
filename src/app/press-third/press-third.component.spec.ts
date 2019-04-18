import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressThirdComponent } from './press-third.component';

describe('PressThirdComponent', () => {
  let component: PressThirdComponent;
  let fixture: ComponentFixture<PressThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
