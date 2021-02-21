import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-wrapper',
  templateUrl: './notes-wrapper.component.html',
  styleUrls: ['./notes-wrapper.component.css']
})
export class NotesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "View Note", url: "/suite/notes/view-note", icon: "fa fa-fw fa-eye" },
    { text: "All Notes", url: "/suite/notes/all-notes", icon: "fa fa-fw fa-list" }
  ]

  ngOnInit(): void {
  }

}
