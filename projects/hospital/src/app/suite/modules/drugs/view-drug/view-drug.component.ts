import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons/public_api';

@Component({
  selector: 'app-view-drug',
  templateUrl: './view-drug.component.html',
  styleUrls: ['./view-drug.component.css']
})
export class ViewDrugComponent implements OnInit {

  constructor() { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
