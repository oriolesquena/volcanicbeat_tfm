import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FormMailService } from '../Services/form-mail.service';
import { HttpResponse } from '@angular/common/http';
import { BookingDTO } from '../Models/booking.dto';

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
  bookingMsg: BookingDTO;

  name: FormControl;
  email: FormControl;
  mobile_phone: FormControl;
  activity: FormControl;
  num_players: FormControl;
  date: FormControl;
  msg: FormControl;
  under_sixteen: FormControl;
  check_politiques: FormControl;

  calendarForm: FormGroup;
  timeTableForm: FormGroup;
  bookingForm: FormGroup;

  isValidForm: boolean | null;
  processing: boolean;
  showMessage: boolean;

  constructor (private formBuilder: FormBuilder, private formMailService: FormMailService) {
    this.bookingMsg = new BookingDTO('', '', '', '', 8, new Date(), '', false, false, true);

    this.isValidForm = null;
    this.processing = false;
    this.showMessage = false;

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

    this.date = new FormControl(
      formatDate(this.bookingMsg.date, 'yyyy-MM-dd', 'en'),
      [Validators.required]
    );

    this.msg = new FormControl(this.bookingMsg.msg, [
      Validators.minLength(8),
      Validators.maxLength(1024),
    ]);

    this.under_sixteen = new FormControl(this.bookingMsg.under_sixteen);

    this.check_politiques = new FormControl(this.bookingMsg.check_politiques, Validators.required);

    this.calendarForm = this.formBuilder.group({
      date: this.date,
    })

    this.timeTableForm = this.formBuilder.group({
      date: this.date,
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
  }

  ngOnInit(): void {}

  submit(): void {
    this.isValidForm = false;
    this.processing = true;

    if (this.calendarForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.bookingMsg = this.calendarForm.value;

    const booking: BookingDTO = {
      name: this.bookingMsg.name,
      email: this.bookingMsg.email,
      mobile_phone: this.bookingMsg.mobile_phone,
      activity: this.bookingMsg.activity,
      num_players: this.bookingMsg.num_players,
      date: this.bookingMsg.date,
      msg: this.bookingMsg.msg,
      under_sixteen: this.bookingMsg.under_sixteen,
      check_politiques: this.bookingMsg.check_politiques,
      isBooking: this.bookingMsg.isBooking,
    };

    // console.log( contact );

    this.formMailService.sendEmail(booking).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          setTimeout(() => {
            this.calendarForm.reset();
            this.timeTableForm.reset();
            this.bookingForm.reset();
            this.processing = false;
            this.showMessage = true;
          }, 800);
          setTimeout(() => {
            this.showMessage = false;
          }, 3500);
        }
      },
      error: (error: any) => {
        console.error('Error sending email:', error);
      }
    })
  }
}
