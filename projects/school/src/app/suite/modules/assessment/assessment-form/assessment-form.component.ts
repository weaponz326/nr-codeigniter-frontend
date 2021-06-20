import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SelectTermComponent } from '../select-term/select-term.component'
import { SelectSubjectComponent } from '../select-subject/select-subject.component'
import { SelectClassComponent } from '../select-class/select-class.component'

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css']
})
export class AssessmentFormComponent implements OnInit {

  constructor() { }

  @ViewChild('assessmentCodeReference') assessmentCode: jqxInputComponent;
  @ViewChild('assessmentNameReference') assessmentName: jqxInputComponent;
  @ViewChild('assessmentDateReference') assessmentDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('subjectReference') subject: jqxInputComponent;
  @ViewChild('classReference') clas: jqxInputComponent;

  @ViewChild("selectTermComponentReference") selectTerm: SelectTermComponent;
  @ViewChild("selectSubjectComponentReference") selectSubject: SelectSubjectComponent;
  @ViewChild("selectClassComponentReference") selectClass: SelectClassComponent;

  termIdStore: any;
  subjectIdStore: any;
  classIdStore: any;

  ngOnInit(): void {
  }

  termSelected(term: any){
    console.log(term);

    this.term.val(term.term_name);
    this.termIdStore = term.id;
  }

  subjectSelected(subject: any){
    console.log(subject);

    this.subject.val(subject.subject_name);
    this.subjectIdStore = subject.id;
  }

  classSelected(clas: any){
    console.log(clas);

    this.clas.val(clas.class_name);
    this.classIdStore = clas.id;
  }

}
