import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewCalenderComponent } from './day-view-calender.component';

describe('DayViewCalenderComponent', () => {
  let component: DayViewCalenderComponent;
  let fixture: ComponentFixture<DayViewCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayViewCalenderComponent]
    });
    fixture = TestBed.createComponent(DayViewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
