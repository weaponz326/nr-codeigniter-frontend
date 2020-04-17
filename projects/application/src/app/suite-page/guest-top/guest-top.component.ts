import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guest-top',
  templateUrl: './guest-top.component.html',
  styleUrls: ['./guest-top.component.css']
})
export class GuestTopComponent implements OnInit {

  constructor() { }

  @Input() source: "string"
  @Input() suiteName: "string" 
  @Input() primaryCaption: "string" 
  @Input() secondaryCaption: "string" 
  @Input() features: "object"

  ngOnInit(): void {
  }

}
