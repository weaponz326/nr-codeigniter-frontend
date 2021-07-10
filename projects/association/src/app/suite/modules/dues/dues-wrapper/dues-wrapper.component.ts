import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dues-wrapper',
  templateUrl: './dues-wrapper.component.html',
  styleUrls: ['./dues-wrapper.component.css']
})
export class DuesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Dues", url: "/suite/dues/all-dues", icon: "fa fa-fw fa-list" },
    { text: "Create Dues", url: "/suite/dues/create-dues", icon: "fa fa-fw fa-plus" },
  ];

  ngOnInit(): void {
  }

}
