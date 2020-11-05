import { Component, OnInit, ViewChild } from '@angular/core';
import { jqxLoaderComponent } from 'jqwidgets-ng/jqxloader';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  @ViewChild('httpLoaderReference', { static: false }) httpLoader: jqxLoaderComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
