import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private reservationService: ReservationService,
              private router: Router) {
  }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);

      this.router.navigate(['/list'])

    }
  }
}
