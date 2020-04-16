// form component for all suite registrations
// component is used inside suite wrapper int the respective suite project
// suite details are passed on to component


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suite-form',
  templateUrl: './suite-form.component.html',
  styleUrls: ['./suite-form.component.css']
})
export class SuiteFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
