import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  //CRUD

  getReservations(): Observable<Reservation[]> {

    return this.http.get<Reservation[]>(this.apiUrl+"/reservations")
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((item) => item.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((item) => item.id === id);
    this.reservations.splice(index, 1);
  }

  updateReservation(id: string, updateReservation: Reservation): void {
    let index = this.reservations.findIndex((item) => item.id === id);
    this.reservations[index] = updateReservation;
  }
}
