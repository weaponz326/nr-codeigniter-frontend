import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurses-wrapper',
  templateUrl: './nurses-wrapper.component.html',
  styleUrls: ['./nurses-wrapper.component.css']
})
export class NursesWrapperComponent implements OnInit {

  constructor() { }

    navLinks: any[] = [
    { text: "All Nurses", url: "/suite/nurses/all-nurses", icon: "fa fa-fw fa-list" },
    { text: "New Nurse", url: "/suite/nurses/new-nurse", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}
