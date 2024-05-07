import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekViewCalenderComponent } from './week-view-calender.component';

describe('WeekViewCalenderComponent', () => {
  let component: WeekViewCalenderComponent;
  let fixture: ComponentFixture<WeekViewCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekViewCalenderComponent]
    });
    fixture = TestBed.createComponent(WeekViewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
