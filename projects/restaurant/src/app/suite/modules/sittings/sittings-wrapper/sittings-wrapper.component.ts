import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sittings-wrapper',
  templateUrl: './sittings-wrapper.component.html',
  styleUrls: ['./sittings-wrapper.component.css']
})
export class SittingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sittings", url: "/suite/sittings/all-sittings", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
