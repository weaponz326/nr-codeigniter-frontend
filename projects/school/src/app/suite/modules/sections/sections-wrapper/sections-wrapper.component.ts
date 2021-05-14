import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-wrapper',
  templateUrl: './sections-wrapper.component.html',
  styleUrls: ['./sections-wrapper.component.css']
})
export class SectionsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sections", url: "/suite/sections/all-sections", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
