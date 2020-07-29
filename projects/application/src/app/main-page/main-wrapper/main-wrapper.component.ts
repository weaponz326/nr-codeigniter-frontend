// wrapper for all other components on the main landing page
// it also provides the container for scroll spy with the scrollnav
// it is the main component that is lazy loaded in the app router

import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  constructor() { }

  baseUrl = environment.baseUrl;
  personalUrl = environment.personalUrl;
  hospitalUrl = environment.hospitalUrl;
  restaurantUrl = environment.restaurantUrl;
  schoolUrl = environment.schoolUrl;
  enterpriseUrl = environment.enterpriseUrl;
  hotelUrl = environment.hotelUrl;
  shopUrl = environment.shopUrl;
  productionUrl = environment.productionUrl;

  ngOnInit(): void {
  }

}
