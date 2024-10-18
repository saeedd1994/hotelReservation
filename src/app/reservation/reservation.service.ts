import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  //CRUD

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((item) => item.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((item) => item.id === id);
    this.reservations.splice(index, 1);
  }

  updateReservation(updateReservation: Reservation): void {
    let index = this.reservations.findIndex((item) => item.id === updateReservation.id);
    this.reservations[index] = updateReservation;
  }
}
