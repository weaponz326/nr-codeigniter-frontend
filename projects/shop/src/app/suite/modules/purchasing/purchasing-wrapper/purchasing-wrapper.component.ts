import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchasing-wrapper',
  templateUrl: './purchasing-wrapper.component.html',
  styleUrls: ['./purchasing-wrapper.component.css']
})
export class PurchasingWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Purchasing", url: "/suite/purchasing/all-purchasing", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
