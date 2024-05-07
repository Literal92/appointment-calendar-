import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedOption: string = 'month'; 

  constructor(private sharedService: SharedService, private router: Router) {}

  currentMonth = this.sharedService.currentMonth;

  callPreviousMonthFromHeader() {
    this.sharedService.previousMonth();
  }
  callNextMonthFromHeader() {
    this.sharedService.nextMonth();
  }
  callSwitchToMonthFromHeader() {
    this.sharedService.switchToMonthView();
  }
  callSwitchToDayFromHeader() {
    this.sharedService.switchToDayView();
  }
  callSwitchToYearFromHeader() {
    this.sharedService.switchToYearView();
  }
  callSwitchToWeekFromHeader() {
    this.sharedService.switchToWeekView();
  }


  onSelectChange(){

    if (this.selectedOption === 'day') {
      this.callSwitchToDayFromHeader();
      this.router.navigate([this.selectedOption])
      console.log('day')
    } else if (this.selectedOption === 'week') {
      this.callSwitchToWeekFromHeader();
      this.router.navigate([this.selectedOption])
      console.log('week')
    } else if (this.selectedOption === 'month') {
      this.callSwitchToMonthFromHeader();
      this.router.navigate([this.selectedOption])
      console.log('month')
    } else if (this.selectedOption === 'year') {
      this.callSwitchToYearFromHeader();
      this.router.navigate([this.selectedOption])
      console.log('year')
    } 

  }
  

}
