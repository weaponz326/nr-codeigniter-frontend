import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveries-wrapper',
  templateUrl: './deliveries-wrapper.component.html',
  styleUrls: ['./deliveries-wrapper.component.css']
})
export class DeliveriesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Deliveries", url: "/suite/deliveries/all-deliveries", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
