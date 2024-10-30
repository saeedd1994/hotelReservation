import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    const savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  //CRUD

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((item) => item.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((item) => item.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }

  updateReservation(updateReservation: Reservation): void {
    let index = this.reservations.findIndex((item) => item.id === updateReservation.id);
    this.reservations[index] = updateReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }
}
