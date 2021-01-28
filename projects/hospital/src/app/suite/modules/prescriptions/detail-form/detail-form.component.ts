import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  @ViewChild("medicineReference") medicineTextArea: jqxTextAreaComponent;
  @ViewChild("dosageReference") dosageTextArea: jqxTextAreaComponent;
  @ViewChild("remarksReference") remarksTextArea: jqxTextAreaComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
