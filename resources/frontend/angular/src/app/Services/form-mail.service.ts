import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDTO } from '../Models/contact.dto';

@Injectable({
  providedIn: 'root'
})
export class FormMailService {

  constructor(private http: HttpClient) {}

  sendEmail(form: any) {
    const endpoint = 'http://192.168.1.42:8000/api/send-email'

    return this.http.post(endpoint, form, { observe: 'response' });
  }
}
