import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reception-wrapper',
  templateUrl: './reception-wrapper.component.html',
  styleUrls: ['./reception-wrapper.component.css']
})
export class ReceptionWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Visitors", url: "/suite/reception/all-visitors", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
