import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private reservationService: ReservationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservationById(id).subscribe((reservation) => {
        if (reservation)
          this.reservationForm.patchValue(reservation)
      })

    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        // update an existing object
        this.reservationService.updateReservation(id, reservation).subscribe(()=>{
          console.log('update an existing dara')
        });
      } else {
        // create a new
        this.reservationService.addReservation(reservation).subscribe(()=>{
          console.log('add new data ')
          }
        );
      }
      this.router.navigate(['/list'])
    }
  }
}
