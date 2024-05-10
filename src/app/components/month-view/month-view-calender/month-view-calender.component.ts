import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { SharedService } from 'src/app/services/shared.service';
import { AppointmentsService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from 'src/app/shared/appointment-form/appointment-form.component';
import { map } from 'rxjs';


@Component({
  selector: 'month-view-calender',
  templateUrl: './month-view-calender.component.html',
  styleUrls: ['./month-view-calender.component.scss']
})

export class MonthViewCalenderComponent {
  [x: string]: any;
  daysOfWeek = this.sharedService.daysOfWeek;
  appointments: Appointment[] = [];
  weeks: any[] = [];

  constructor(
    public sharedService: SharedService,
    public dialog: MatDialog,
    private appointmentsService: AppointmentsService
  ) {
    // Handle changes to the week object here
    this.sharedService.weekSubject.pipe(
      map((week: Date[]) => {
        this.weeks = week;
      }
      )).subscribe();

    appointmentsService.appointments$.pipe(
      map(res => {
        this.appointments = res;
      })
    ).subscribe();
  }

  onGetAppointment(date: string) {
    return this.appointmentsService.getAppointmentsForDate(date);
  }

  // === Appointment form condition === //
  openAppointmentForm(day: Date) {
    const dialogRef = this.dialog.open(AppointmentFormComponent, {
      data: day,
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onAddAppointment(result)
      }
    });
    this.selectedDate = day.getDate().toString();
  }

  selectedDate: string | null = null;
  selectedAppointment: Appointment | null = null;


  onAddAppointment(appointment: Appointment) {
    if (!appointment.title) {
      appointment.title = 'Unknown Title';
    }

    this.selectedAppointment = appointment;
    this.appointmentsService.addAppointment(appointment);
  }

  onDeleteAppointment(id: string) {
    this.appointmentsService.deleteAppointment(id);
  }

  // === Drag & Drop === //
  // setSelectedDay(day: string) {
  //   this.selectedDate = day;
  // }

  onDragStarted(event: CdkDragStart, appointment: Appointment) {
    this.selectedAppointment = appointment;
  }

  onDrop(event: CdkDragDrop<string[]> | any) {
    const newDate = event.container.data[event.currentIndex];

    if (this.selectedAppointment) {
      this.selectedAppointment.date = '3';
    }
  }


}
