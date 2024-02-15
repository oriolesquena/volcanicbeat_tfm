import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunsetService {
  constructor(private http: HttpClient) {}

  getSunsetHour(): Observable<any> {
    const endpoint = 'https://api.sunrisesunset.io/json?lat=42.174900&lng=2.509958&timezone=Europe/Berlin&date=2024-03-30'

    return this.http.get<any>(endpoint);
  }
}
