import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers-wrapper',
  templateUrl: './workers-wrapper.component.html',
  styleUrls: ['./workers-wrapper.component.css']
})
export class WorkersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Workers", url: "/suite/workers/all-workers", icon: "fa fa-fw fa-list" },
    { text: "New Worker", url: "/suite/workers/new-worker", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}
