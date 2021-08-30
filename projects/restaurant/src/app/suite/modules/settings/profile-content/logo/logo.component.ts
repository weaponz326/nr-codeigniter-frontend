import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Output() logoEvent = new EventEmitter<any>();

  @ViewChild('imageUpload') logo: ElementRef;
  @ViewChild('saveLogoButtonReference') saveLogoButton: jqxButtonComponent;

  image: any;
  imgSrc = '/projects/personal/src/assets/images/utilities/logo-palceholder.jpg';

  ngOnInit(): void {
  }

  onImageSelected(e: any){
    const file: File = e.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
        this.image = reader.result;
      }
    }
  }

  emitLogo(){
    let data = {
      logo: this.image,
    }

  	this.logoEvent.emit(data);
  }

}
