import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'day', loadChildren: () => import('./components/day-view/day-view.module').then(m => m.DayViewRoutingModule) },
  { path: 'week', loadChildren: () => import('./components/week-view/week-view.module').then(m => m.WeekViewRoutingModule) },
  { path: 'month', loadChildren: () => import('./components/month-view/month-view.module').then(m => m.MonthViewRoutingModule) },
  { path: '', redirectTo: '/month', pathMatch: 'full' }, // Redirect to the default view
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }