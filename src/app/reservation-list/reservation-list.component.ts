import {Component, OnInit} from '@angular/core';
import {Reservation} from "../models/reservation";
import {ReservationService} from "../reservation/reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }
}
