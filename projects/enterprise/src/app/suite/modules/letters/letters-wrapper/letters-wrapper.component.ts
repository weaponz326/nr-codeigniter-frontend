import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-wrapper',
  templateUrl: './letters-wrapper.component.html',
  styleUrls: ['./letters-wrapper.component.css']
})
export class LettersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Letters", url: "/suite/letters/all-letters", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
