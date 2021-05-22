import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-wrapper',
  templateUrl: './budget-wrapper.component.html',
  styleUrls: ['./budget-wrapper.component.css']
})
export class BudgetWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Budgets", url: "/suite/budget/all-budget", icon: "fa fa-fw fa-list" }
  ]

  ngOnInit(): void {
  }

}
