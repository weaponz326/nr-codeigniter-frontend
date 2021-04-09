import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-wrapper',
  templateUrl: './rooms-wrapper.component.html',
  styleUrls: ['./rooms-wrapper.component.css']
})
export class RoomsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Rooms", url: "/suite/rooms/all-rooms", icon: "fa fa-fw fa-list" },
    { text: "Add Room", url: "/suite/rooms/add-room", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}
