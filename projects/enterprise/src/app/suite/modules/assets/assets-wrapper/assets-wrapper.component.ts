import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-wrapper',
  templateUrl: './assets-wrapper.component.html',
  styleUrls: ['./assets-wrapper.component.css']
})
export class AssetsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Assets", url: "/suite/assets/all-assets", icon: "fa fa-fw fa-list" },
    { text: "Add Asset", url: "/suite/assets/add-asset", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}
