import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-day-view-calender',
  templateUrl: './day-view-calender.component.html',
  styleUrls: ['./day-view-calender.component.scss']
})

export class DayViewCalenderComponent {
  constructor( private sharedService: SharedService) {}

  selectedDate: Date = new Date();
  currentDay = this.sharedService.daysOfWeek[this.sharedService.currentMonth.getDay()]


}
