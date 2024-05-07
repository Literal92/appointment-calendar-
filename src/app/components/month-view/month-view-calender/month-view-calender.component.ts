import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { SharedService } from 'src/app/services/shared.service';
import { AppointmentsService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from 'src/app/shared/appointment-form/appointment-form.component';


@Component({
  selector: 'month-view-calender',
  templateUrl: './month-view-calender.component.html',
  styleUrls: ['./month-view-calender.component.scss']
})

export class MonthViewCalenderComponent {
  [x: string]: any;
  daysOfWeek = this.sharedService.daysOfWeek;
  weeks: any[] = []

  constructor(
    public sharedService: SharedService,
    public dialog: MatDialog,
    private appointmentsService: AppointmentsService
  ) {
    // Handle changes to the week object here
    this.sharedService.weekSubject.subscribe((week: Date[]) => {
      this.weeks = week;
    });
   }


  // === Appointment form condition === //

  showAppointmentForm = this.appointmentsService.showAppointmentForm;
  openAppointmentForm(day: string) {
    const dialogRef = this.dialog.open(AppointmentFormComponent, {
      data: day,
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onAddAppointment(result)
      }
    });
    this.selectedDate = day;
  }

  selectedDate: string | null = null;
  selectedAppointment: Appointment | null = null;


  onAddAppointment(appointment: Appointment) {
    if (!appointment.title) {
      appointment.title = 'Unknown Title';
    }
    if (this.selectedDate) {
      appointment.date = this.selectedDate;
      this.selectedAppointment = appointment;
    }
    this.showAppointmentForm = false;
  }
  onDeleteAppointment() {
    if (this.selectedAppointment) {
      if (this.selectedAppointment.date) {
        const selectedAppointmentTimestamp = new Date(this.selectedAppointment.date).getTime();

        const index = this.appointmentsService.appointments.findIndex(
          (appointment) => {
            if (appointment.date) {
              const appointmentTimestamp = new Date(appointment.date).getTime();
              return appointmentTimestamp === selectedAppointmentTimestamp &&
                appointment.startTime === this.selectedAppointment?.startTime &&
                appointment.endTime === this.selectedAppointment?.endTime;
            }
            return false;
          }
        );

        if (index !== -1) {
          this.appointmentsService.appointments.splice(index, 1);
        }
      }

      this.selectedAppointment = null;
    }
  }

  onCloseForm() {
    this.showAppointmentForm = false;
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
