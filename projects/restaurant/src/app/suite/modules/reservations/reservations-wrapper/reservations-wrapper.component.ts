import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-wrapper',
  templateUrl: './reservations-wrapper.component.html',
  styleUrls: ['./reservations-wrapper.component.css']
})
export class ReservationsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Reservations", url: "/suite/reservations/all-reservations", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
