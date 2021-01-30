// suite description on main landing page
// it also contains button for visiting main personal page which opens in a new tab
// suite details are passed on to the component to allow it to be rused
// text is left aligned

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suite-left',
  templateUrl: './suite-left.component.html',
  styleUrls: ['./suite-left.component.css']
})
export class SuiteLeftComponent implements OnInit {

  constructor() { }

  @Input() suiteImageSrc: string;
  @Input() suiteDivId: string;
  @Input() suiteName: string;
  @Input() suiteDescription: string;
  @Input() suiteUses: object;
  @Input() suiteButtonLink: string;

  ngOnInit(): void {
  }

}
