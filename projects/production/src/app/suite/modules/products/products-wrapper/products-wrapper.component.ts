import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.css']
})
export class ProductsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Products", url: "/suite/products/all-products", icon: "fa fa-fw fa-list" },
    { text: "New Product", url: "/suite/products/new-product", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}
