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

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.scss']
})
export class CalendarFormComponent {
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

  bookingForm: FormGroup;

  isValidForm: boolean | null;
  processing: boolean;
  showMessage: boolean;

  constructor (private formBuilder: FormBuilder, private formMailService: FormMailService) {
    this.bookingMsg = new BookingDTO('', '', '', '', 0, new Date(), '', false, false);

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
    ]);

    this.date = new FormControl(
      formatDate(this.bookingMsg.date, 'yyyy-MM-dd HH:mm', 'en'),
      [Validators.required]
    );

    this.msg = new FormControl(this.bookingMsg.msg, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(1024),
    ]);

    this.under_sixteen = new FormControl(this.bookingMsg.under_sixteen);

    this.check_politiques = new FormControl(this.bookingMsg.check_politiques, Validators.required);

    this.bookingForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      mobile_phone: this.mobile_phone,
      activity: this.activity,
      num_players: this.num_players,
      date: this.date,
      msg: this.msg,
      under_sixteen: this.under_sixteen,
      check_politiques: this.check_politiques,
    })
  }

  ngOnInit(): void {}

  submit(): void {
    this.isValidForm = false;
    this.processing = true;

    if (this.bookingForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.bookingMsg = this.bookingForm.value;

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
    };

    // console.log( contact );

    this.formMailService.sendEmail(booking).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          setTimeout(() => {
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
