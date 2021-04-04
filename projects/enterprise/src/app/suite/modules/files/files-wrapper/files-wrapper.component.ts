import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-wrapper',
  templateUrl: './files-wrapper.component.html',
  styleUrls: ['./files-wrapper.component.css']
})
export class FilesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Folders", url: "/suite/files/all-folders", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
