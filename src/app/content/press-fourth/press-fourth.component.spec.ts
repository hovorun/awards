import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressFourthComponent } from './press-fourth.component';

describe('PressFourthComponent', () => {
  let component: PressFourthComponent;
  let fixture: ComponentFixture<PressFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
