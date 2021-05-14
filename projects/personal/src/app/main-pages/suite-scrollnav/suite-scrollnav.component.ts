import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suite-scrollnav',
  templateUrl: './suite-scrollnav.component.html',
  styleUrls: ['./suite-scrollnav.component.css']
})
export class SuiteScrollnavComponent implements OnInit {

  constructor() { }

  @Output() aboutEvent = new EventEmitter();
  @Output() pricingEvent = new EventEmitter();
  @Output() contactEvent = new EventEmitter();

  ngOnInit(): void {
  }

  onAboutClicked(e) {
    e.preventDefault();
    this.aboutEvent.emit();
  }

  onPricingClicked(e) {
    e.preventDefault();
    this.pricingEvent.emit();
  }

  onContactClicked(e) {
    e.preventDefault();
    this.contactEvent.emit();
  }

}
