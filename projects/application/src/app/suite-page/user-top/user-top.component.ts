import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.component.html',
  styleUrls: ['./user-top.component.css']
})
export class UserTopComponent implements OnInit {

  constructor() { }

  @Input() source: "string"
  @Input() suiteName: "string"

  ngOnInit(): void {
  }

}
