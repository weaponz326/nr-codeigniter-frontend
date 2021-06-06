// top part of the main landing page
// contains app descriptions, features and button for visiting portal

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-main-top',
  templateUrl: './main-top.component.html',
  styleUrls: ['./main-top.component.css']
})
export class MainTopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
