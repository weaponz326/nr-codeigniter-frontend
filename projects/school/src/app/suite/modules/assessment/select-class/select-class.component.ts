import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';


@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css']
})
export class SelectClassComponent implements OnInit {

  constructor() { }

  @ViewChild("selectClassWindowReference") selectClassWindow: jqxWindowComponent;
  @ViewChild("allClassesListBoxReference") allClassesListBox: jqxListBoxComponent;
  @ViewChild("assessmentClassesListBoxReference") assessmentClassesListBox: jqxListBoxComponent;

  @Output() classEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.selectClassWindow.open();
  }

  selectClass(){
    console.log("u have selected a class or classes, can't tell though");
    this.classEvent.emit(this.assessmentClassesListBox.val());
    this.selectClassWindow.close();
  }

}
