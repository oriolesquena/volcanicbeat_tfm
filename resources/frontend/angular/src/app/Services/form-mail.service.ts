import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDTO } from '../Models/contact.dto';

@Injectable({
  providedIn: 'root'
})
export class FormMailService {

  constructor(private http: HttpClient) {}

  sendEmail(contact: any) {
    const endpoint = 'http://localhost:8000/api/send-email'

    return this.http.post(endpoint, contact, { observe: 'response' });
  }
}
