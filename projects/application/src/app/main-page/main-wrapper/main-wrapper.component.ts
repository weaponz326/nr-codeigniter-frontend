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

  // baseUrl = environment.baseUrl;
  // personalUrl = environment.personalUrl;
  // hospitalUrl = environment.hospitalUrl;
  // restaurantUrl = environment.restaurantUrl;
  // schoolUrl = environment.schoolUrl;
  // enterpriseUrl = environment.enterpriseUrl;
  // associationUrl = environment.associationUrl;
  // hotelUrl = environment.hotelUrl;
  // shopUrl = environment.shopUrl;
  // productionUrl = environment.productionUrl;

  personalUrl = 'https://personal.netrink.com';
  hospitalUrl = 'https://hospital.netrink.com';
  restaurantUrl = 'https://restaurant.netrink.com';
  schoolUrl = 'https://school.netrink.com';
  enterpriseUrl = 'https://enterprise.netrink.com';
  associationUrl = 'https://association.netrink.com';
  hotelUrl = 'https://hotel.netrink.com';
  shopUrl = 'https://shop.netrink.com';
  productionUrl = 'https://production.netrink.com';

  ngOnInit(): void {
  }

  gotoPersonal() {
    document.querySelector('#personalComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoHospital() {
    document.querySelector('#hospitalComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoRestaurant() {
    document.querySelector('#restaurantComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoSchool() {
    document.querySelector('#schoolComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoEnterprise() {
    document.querySelector('#enterpriseComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoAssociation() {
    document.querySelector('#associationComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoHotel() {
    document.querySelector('#hotelComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoShop() {
    document.querySelector('#shopComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

  gotoProduction() {
    document.querySelector('#productionComponentReference').scrollIntoView({ behavior: 'smooth' });
  }

}
