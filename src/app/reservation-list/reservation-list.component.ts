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

    this.reservationService.getReservations().subscribe((reservations)=>{
      this.reservations = reservations;
    })
  }

  deleteReservationItem(id: string) {
    this.reservationService.deleteReservation(id).subscribe(()=>{
      console.log('delete success');
    })
  }
}
