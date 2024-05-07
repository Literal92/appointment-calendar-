// day-view-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekViewCalenderComponent } from './week-view-calender/week-view-calender.component';

const routes: Routes = [
  { path: '', component: WeekViewCalenderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeekViewRoutingModule { }
