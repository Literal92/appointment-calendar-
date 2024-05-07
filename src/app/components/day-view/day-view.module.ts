// day-view-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayViewCalenderComponent } from './day-view-calender/day-view-calender.component';

const routes: Routes = [
  { path: '', component: DayViewCalenderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayViewRoutingModule { }
