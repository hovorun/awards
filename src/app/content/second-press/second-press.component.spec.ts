import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPressComponent } from './second-press.component';

describe('SecondPressComponent', () => {
  let component: SecondPressComponent;
  let fixture: ComponentFixture<SecondPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
