import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Reservation } from '../Interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiURL = "http://localhost:8000/api/reservation";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
    getAll(): Observable<Reservation[]> {
      return this.httpClient.get<Reservation[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    create(reservation: any) {
      return this.httpClient.post(this.apiURL, reservation, { observe: 'response' });
    }

    find(id: number): Observable<Reservation> {
      return this.httpClient.get<Reservation>(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    update(id: number, reservation: any): Observable<Reservation> {
      return this.httpClient.put<Reservation>(this.apiURL + id, JSON.stringify(reservation), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    delete(id: number){
      return this.httpClient.delete<Reservation>(this.apiURL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    errorHandler(error: any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
}
