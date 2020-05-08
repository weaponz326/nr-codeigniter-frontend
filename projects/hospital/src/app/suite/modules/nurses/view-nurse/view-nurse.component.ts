import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-nurse',
  templateUrl: './view-nurse.component.html',
  styleUrls: ['./view-nurse.component.css']
})
export class ViewNurseComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
