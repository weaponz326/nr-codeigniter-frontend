import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractors-wrapper',
  templateUrl: './contractors-wrapper.component.html',
  styleUrls: ['./contractors-wrapper.component.css']
})
export class ContractorsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Contractors", url: "/suite/contractors/all-contractors", icon: "fa fa-fw fa-list" },
    { text: "Add Contractor", url: "/suite/contractors/add-contractor", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}
