import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-wrapper',
  templateUrl: './services-wrapper.component.html',
  styleUrls: ['./services-wrapper.component.css']
})
export class ServicesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Services", url: "/suite/services/all-services", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
