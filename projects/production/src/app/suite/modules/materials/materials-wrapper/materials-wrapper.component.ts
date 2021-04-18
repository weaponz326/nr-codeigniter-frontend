import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials-wrapper',
  templateUrl: './materials-wrapper.component.html',
  styleUrls: ['./materials-wrapper.component.css']
})
export class MaterialsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Materials", url: "/suite/materials/all-materials", icon: "fa fa-fw fa-list" },
    { text: "Add Material", url: "/suite/materials/add-material", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}
