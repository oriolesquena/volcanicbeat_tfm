import { Component, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { FormMailService } from '../Services/form-mail.service';
import { HttpResponse } from '@angular/common/http';
import { BookingDTO } from '../Models/booking.dto';

import { ReservationService } from '../Services/reservation.service';
import { Reservation } from '../Interfaces/reservation';

import { SunsetService } from '../Services/sunset.service';

import {MatCalendarCellCssClasses} from '@angular/material/datepicker';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

class CustomDateAdapter extends MomentDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1;
  }
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [{ provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }]
})

export class CalendarComponent {
  reservations: Reservation[] = [];

  bookingMsg: BookingDTO;

  name: FormControl;
  email: FormControl;
  mobile_phone: FormControl;
  activity: FormControl;
  num_players: FormControl;
  time: FormControl;
  selectedDate: any;
  msg: FormControl;
  under_sixteen: FormControl;
  check_politiques: FormControl;

  calendarForm: FormGroup;
  timeTableForm: FormGroup;
  bookingForm: FormGroup;

  minDate: Date;
  maxDate: Date;

  minHour: number = 9;
  maxHour: number = 18; // by default, but later calculated depending on the sunset

  isValidForm: boolean | null;
  processing: boolean;
  showMessage: boolean;

  datesToHighlight: Date[] = [];
  hoursTimeTable: number[] = [];
  hoursNotAvailable: number[] = [13, 13.5, 14, 14.5]; // lunch hours
  summerMonths: number[] = [6, 7, 8];
  reservationDate: Date = new Date();

  constructor (private formBuilder: FormBuilder, private formMailService: FormMailService, public reservationService: ReservationService, public sunsetService: SunsetService) {
    this.bookingMsg = new BookingDTO('', '', '', '', 8, '', '', false, false, 2);

    this.isValidForm = null;
    this.processing = false;
    this.showMessage = false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentDate.setFullYear(currentYear + 1)) // add one year;

    this.name = new FormControl(this.bookingMsg.name, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]);

    this.email = new FormControl(this.bookingMsg.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.mobile_phone = new FormControl(this.bookingMsg.mobile_phone, [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(13),
      Validators.pattern('[- +()0-9]+'),
    ]);

    this.activity = new FormControl(this.bookingMsg.activity, Validators.required);

    this.num_players = new FormControl(this.bookingMsg.num_players, [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(8),
      Validators.max(16),
    ]);

    this.time = new FormControl(this.bookingMsg.date, Validators.required);

    this.msg = new FormControl(this.bookingMsg.msg, [
      Validators.minLength(8),
      Validators.maxLength(1024),
    ]);

    this.under_sixteen = new FormControl(this.bookingMsg.under_sixteen);

    this.check_politiques = new FormControl(this.bookingMsg.check_politiques, Validators.required);

    this.calendarForm = this.formBuilder.group({
      selectedDate: this.selectedDate,
    })

    this.timeTableForm = this.formBuilder.group({
      time: this.time,
    })

    this.bookingForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      mobile_phone: this.mobile_phone,
      activity: this.activity,
      num_players: this.num_players,
      msg: this.msg,
      under_sixteen: this.under_sixteen,
      check_politiques: this.check_politiques,
    })

    this.loadReservations();
  }

  ngOnInit(): void {
  }

  stringToHourNumber(hour: string): number {
    // converts hour to number and rounds it up to half or full hour

    console.log(hour);

    let sunsetHours: number = 18;
    let sunsetMinutes: number = 0;
    let arrayHours = hour.split(':');

    if (hour.includes("PM")) {
      sunsetHours = parseInt(arrayHours[0]) + 12;
    } else {
      sunsetHours = parseInt(arrayHours[0]);
    }

    sunsetMinutes = parseInt(arrayHours[1])/60;

    if (sunsetMinutes < 0.25) {
      sunsetMinutes = 0;
    } else if (sunsetMinutes < 0.75) {
      sunsetMinutes = 0.5;
    } else {
      sunsetMinutes = 0;
      sunsetHours = sunsetHours + 1;
    }

    sunsetHours = sunsetHours + sunsetMinutes;

    return sunsetHours;
  }

  calculateLastHour(): void {
    let sunsetHour: number;
    let currentDateString = formatDate(this.selectedDate, 'yyyy-MM-dd', 'en');

    if (this.summerMonths.includes(this.selectedDate.getMonth())) {
      this.maxHour = 21;
    } else {
      this.sunsetService.getSunsetHour(currentDateString).subscribe((data) => {
        sunsetHour = this.stringToHourNumber(data.results.sunset);
        this.maxHour = sunsetHour - 2;
        this.createHoursTimeTable();
      })
    }
  }

  createHoursTimeTable(): void {
    this.hoursTimeTable = [];
    for(let i = this.minHour; i <= this.maxHour; i++) {
      this.hoursTimeTable.push(i);
      // this.hoursTimeTable.push(i + 0.25);
      if (i + 0.5 <= this.maxHour){
        this.hoursTimeTable.push(i + 0.5);
      }
      // this.hoursTimeTable.push(i + 0.75);
    }
    console.log(this.maxHour);
    console.log(this.hoursTimeTable);
  }

  loadReservations(): void {
    this.reservationService.getAll().subscribe((data: Reservation[]) => {
      this.reservations = data;
      this.datesToHighlight = this.availableDays(this.reservations);
    })
  }

  availableDays(reservs: Reservation[]): Date[] {
    let dates: Date[] = [];

    reservs.forEach((res: Reservation) => {
      dates.push(new Date(res.date));
    });
    console.log(dates);

    return dates;
  }

  onSelect(event: any){
    this.selectedDate = event._d;
    console.log(this.selectedDate);
    this.hoursNotAvailable = [13, 13.5, 14, 14.5]; // reset to lunch hours
    this.availableHours(this.selectedDate);
    this.calculateLastHour();
  }

  availableHours(date: Date): void {
    date = new Date(date);
    const gamesPerDate = this.datesToHighlight.filter((d) => 
      d.getDate() === date.getDate()  && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear()
    )
    const gameHours = gamesPerDate.map((games) => (games.getHours() + games.getMinutes()/60));
    
    gameHours.forEach(hour => {
      this.hoursNotAvailable.push(hour - 1.5);
      this.hoursNotAvailable.push(hour - 1);
      this.hoursNotAvailable.push(hour - 0.5);
      this.hoursNotAvailable.push(hour);
      this.hoursNotAvailable.push(hour + 0.5);
      this.hoursNotAvailable.push(hour + 1);
      this.hoursNotAvailable.push(hour + 1.5);
    })

    this.hoursNotAvailable.sort((a, b) => a - b);
    
    console.log(this.hoursNotAvailable);
  }

  hoursToString(numberHour: number): string {
    let hours: number;
    let minutes: string;

    hours = Math.floor(numberHour);
    minutes = ((numberHour-hours) * 60).toString();
    if (minutes.length<2) {
      minutes = minutes.concat("0");
    }

    return (hours.toString().concat(":").concat(minutes.concat("h")));
  }

  submit(): void {
    this.isValidForm = false;
    this.processing = true;

    if (this.bookingForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.bookingMsg = this.bookingForm.value;
    const hours = parseFloat(this.timeTableForm.value.time);
    const minutes = (hours - Math.floor(hours)) * 60;
    this.reservationDate = new Date(this.selectedDate.setHours(hours));
    this.reservationDate.setMinutes(minutes);

    const booking: BookingDTO = {
      name: this.bookingMsg.name,
      email: this.bookingMsg.email,
      mobile_phone: this.bookingMsg.mobile_phone,
      activity: this.bookingMsg.activity,
      num_players: this.bookingMsg.num_players,
      date: this.reservationDate.toLocaleString("en-GB"),
      msg: this.bookingMsg.msg,
      under_sixteen: this.bookingMsg.under_sixteen,
      check_politiques: this.bookingMsg.check_politiques,
      typeOfMail: 2, // send mail to VB
    };

    const bookingClient = JSON.parse(JSON.stringify(booking));

    bookingClient.typeOfMail = 3; // send mail to client

    const reservation: Reservation = {
      name: this.bookingMsg.name,
      email: this.bookingMsg.email,
      phone: this.bookingMsg.mobile_phone,
      activity: this.bookingMsg.activity,
      num_players: this.bookingMsg.num_players,
      date: formatDate(this.reservationDate, 'yyyy-MM-dd HH:mm:ss', 'en'),
      msg: this.bookingMsg.msg,
    }

    this.reservationService.create(reservation).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          console.log('Reservation created');
        }
      },
      error: (error: any) => {
        console.error('Error posting reservation:', error);
      }
    })

    this.formMailService.sendEmailClient(bookingClient).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          console.log('Email to client succesfully sent');
          console.log(bookingClient.typeOfMail);
          console.log(booking.typeOfMail);
        }
      },
      error: (error: any) => {
        console.error('Error sending email to client:', error);
      }
    })

    this.formMailService.sendEmail(booking).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          setTimeout(() => {
            this.calendarForm.reset();
            this.timeTableForm.reset();
            this.bookingForm.reset();
            this.processing = false;
            this.showMessage = true;
            console.log('Email to VB succesfully sent');
          }, 400);
          setTimeout(() => {
            this.showMessage = false;
            window.location.reload();
          }, 3500);
        }
      },
      error: (error: any) => {
        console.error('Error sending email:', error);
      }
    })
  }
}
