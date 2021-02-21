import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis-wrapper',
  templateUrl: './diagnosis-wrapper.component.html',
  styleUrls: ['./diagnosis-wrapper.component.css']
})
export class DiagnosisWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Diagnosis", url: "/suite/diagnosis/all-diagnosis", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
