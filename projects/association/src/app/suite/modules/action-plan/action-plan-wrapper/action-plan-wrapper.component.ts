import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-plan-wrapper',
  templateUrl: './action-plan-wrapper.component.html',
  styleUrls: ['./action-plan-wrapper.component.css']
})
export class ActionPlanWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Plans", url: "/suite/action-plan/all-plans", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}
