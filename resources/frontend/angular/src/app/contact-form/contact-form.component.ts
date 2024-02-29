import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactDTO } from '../Models/contact.dto';
import { FormMailService } from '../Services/form-mail.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactMsg: ContactDTO;

  name: FormControl;
  email: FormControl;
  mobile_phone: FormControl;
  title: FormControl;
  msg: FormControl;
  check_politiques: FormControl;

  contactForm: FormGroup;

  isValidForm: boolean | null;
  processing: boolean;
  showMessage: boolean;

  constructor (private formBuilder: FormBuilder, private formMailService: FormMailService) {
    this.contactMsg = new ContactDTO('', '', '', '', '', false, 1);

    this.isValidForm = null;
    this.processing = false;
    this.showMessage = false;

    this.name = new FormControl(this.contactMsg.name, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(64),
    ]);

    this.email = new FormControl(this.contactMsg.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.mobile_phone = new FormControl(this.contactMsg.mobile_phone, [
      Validators.minLength(9),
      Validators.maxLength(13),
      Validators.pattern('[- +()0-9]+'),
    ]);

    this.title = new FormControl(this.contactMsg.title, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(64),
    ]);

    this.msg = new FormControl(this.contactMsg.msg, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(1024),
    ]);

    this.check_politiques = new FormControl(this.contactMsg.check_politiques, Validators.required)

    this.contactForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      mobile_phone: this.mobile_phone,
      title: this.title,
      msg: this.msg,
      check_politiques: this.check_politiques,
    })
  }

  ngOnInit(): void {}

  submit(): void {
    this.isValidForm = false;
    this.processing = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.contactMsg = this.contactForm.value;

    const contact: ContactDTO = {
      name: this.contactMsg.name,
      email: this.contactMsg.email,
      mobile_phone: this.contactMsg.mobile_phone,
      title: this.contactMsg.title,
      msg: this.contactMsg.msg,
      check_politiques: this.contactMsg.check_politiques,
      typeOfMail: 1,
    };

    // console.log( contact );

    this.formMailService.sendEmail(contact).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          setTimeout(() => {
            this.contactForm.reset();
            this.processing = false;
            this.showMessage = true;
          }, 400);
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
