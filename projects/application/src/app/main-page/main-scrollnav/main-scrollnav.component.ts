// scroll spy navbar for navigating to suites on main landing page

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-scrollnav',
  templateUrl: './main-scrollnav.component.html',
  styleUrls: ['./main-scrollnav.component.css']
})
export class MainScrollnavComponent implements OnInit {

  constructor() { }

  @Output() personalEvent = new EventEmitter();
  @Output() hospitalEvent = new EventEmitter();
  @Output() restaurantEvent = new EventEmitter();
  @Output() schoolEvent = new EventEmitter();
  @Output() enterpriseEvent = new EventEmitter();
  @Output() associationEvent = new EventEmitter();
  @Output() hotelEvent = new EventEmitter();
  @Output() shopEvent = new EventEmitter();
  @Output() productionEvent = new EventEmitter();

  ngOnInit(): void {
  }

  onPersonalClicked(e) {
    e.preventDefault();
    this.personalEvent.emit();
  }

  onHospitalClicked(e) {
    e.preventDefault();
    this.hospitalEvent.emit();
  }

  onRestaurantClicked(e) {
    e.preventDefault();
    this.restaurantEvent.emit();
  }

  onSchoolClicked(e) {
    e.preventDefault();
    this.schoolEvent.emit();
  }

  onEnterpriseClicked(e) {
    e.preventDefault();
    this.enterpriseEvent.emit();
  }

  onAssociationClicked(e) {
    e.preventDefault();
    this.associationEvent.emit();
  }

  onHotelClicked(e) {
    e.preventDefault();
    this.hotelEvent.emit();
  }

  onShopClicked(e) {
    e.preventDefault();
    this.shopEvent.emit();
  }

  onProductionClicked(e) {
    e.preventDefault();
    this.productionEvent.emit();
  }

}
