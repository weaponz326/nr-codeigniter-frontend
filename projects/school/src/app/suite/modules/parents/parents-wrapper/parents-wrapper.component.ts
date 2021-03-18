import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-wrapper',
  templateUrl: './parents-wrapper.component.html',
  styleUrls: ['./parents-wrapper.component.css']
})
export class ParentsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Parents", url: "/suite/parents/all-parents", icon: "fa fa-fw fa-list" },
    { text: "New Parent", url: "/suite/parents/new-parent", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}
