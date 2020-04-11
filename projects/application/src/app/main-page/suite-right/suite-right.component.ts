// suite description on main landing page
// it also contains button for visiting main personal page which opens in a new tab
// suite details are passed on to the component to allow it to be rused
// text is right aligned

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suite-right',
  templateUrl: './suite-right.component.html',
  styleUrls: ['./suite-right.component.css']
})
export class SuiteRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() suiteImageSrc: string;
  @Input() suiteDivId: string;
  @Input() suiteName: string;
  @Input() suiteDescription: string;
  @Input() suiteUses: object;
  @Input() suiteButtonLink: string;

}
