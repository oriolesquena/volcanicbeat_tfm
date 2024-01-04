import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../Services/reservation.service';
import { Reservation } from '../Interfaces/reservation';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  reservations: Reservation[] = [];

  constructor(public reservationService: ReservationService) {}
/*
  ngOnInit(): void {
    this.reservationService.getAll().subscribe((data: Reservation[]) => {
      this.reservations = data;
      console.log('first');
      console.log(this.reservations);
    })
  }

  availableDays(reservs: Reservation[]): Date[] {
    let dates: Date[] = [];

    reservs.forEach((res: Reservation) => {
      dates.push(res.date);
    });

    return dates;
  }
*/
}
