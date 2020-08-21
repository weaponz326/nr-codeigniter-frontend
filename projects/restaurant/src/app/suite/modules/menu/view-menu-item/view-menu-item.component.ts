import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-menu-item',
  templateUrl: './view-menu-item.component.html',
  styleUrls: ['./view-menu-item.component.css']
})
export class ViewMenuItemComponent implements OnInit {

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
