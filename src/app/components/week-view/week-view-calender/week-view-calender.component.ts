import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-week-view-calender',
  templateUrl: './week-view-calender.component.html',
  styleUrls: ['./week-view-calender.component.scss']
})
export class WeekViewCalenderComponent implements OnInit {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  week: any[] = [];

  ngOnInit() {

    this.initializeWeek();
  }

  initializeWeek() {
    const currentDate = new Date();
    for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() + i);
      this.week.push({
        date: day,
        events: [
          { name: 'Event 1' },
          { name: 'Event 2' },
          // Add more events as needed
        ]
      });
    }
  }
}
