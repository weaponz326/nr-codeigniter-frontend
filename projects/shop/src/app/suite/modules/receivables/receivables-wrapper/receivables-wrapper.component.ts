import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables-wrapper',
  templateUrl: './receivables-wrapper.component.html',
  styleUrls: ['./receivables-wrapper.component.css']
})
export class ReceivablesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Receivables", url: "/suite/receivables/all-receivables", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
