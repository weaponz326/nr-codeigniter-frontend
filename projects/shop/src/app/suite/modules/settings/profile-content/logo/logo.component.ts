import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  @ViewChild('panelReference') logoPanel: jqxPanelComponent;
  @ViewChild('savePhotoButtonReference') saveLogoButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
