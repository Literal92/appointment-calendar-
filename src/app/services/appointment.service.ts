import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})

export class AppointmentsService {

  appointments: Appointment[] = [];

  showAppointmentForm = false

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }
  getAppointmentsForDate(date: string): Appointment[] {
    return this.appointments.filter(appointment => {
      const appointmentStartTime = new Date(appointment.startTime);
      const appointmentEndTime = new Date(appointment.endTime);
      const selectedDate = new Date(date);
  
      return appointmentStartTime <= selectedDate && selectedDate <= appointmentEndTime;
    });
  }

}
