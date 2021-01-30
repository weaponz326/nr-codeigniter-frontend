import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.css']
})
export class NewRinkComponent implements OnInit {

  constructor(private portalApi: PortalApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('goToSearchButtonReference') goToSearchbutton: jqxButtonComponent;
  @ViewChild('toInputReference') toInput: jqxInputComponent;
  @ViewChild('typeDropDownListReference') typeDropDownList: jqxDropDownListComponent;
  @ViewChild('sourceButtonReference') sourceButton: jqxButtonComponent;
  @ViewChild('commentButtonReference') commentTextArea: jqxTextAreaComponent;
  @ViewChild('sendButtonReference') sendButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // budget type settings
  typeSource: string[] = ['Admission', 'Patient', 'Prescription'];

}
