import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @ViewChild('photoPanelReference') photoPanel: jqxPanelComponent;
  @ViewChild('savePhotoButtonReference') savePhotoButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
