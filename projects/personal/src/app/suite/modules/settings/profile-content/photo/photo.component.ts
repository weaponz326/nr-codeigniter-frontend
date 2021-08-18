import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @Output() photoEvent = new EventEmitter<any>();

  @ViewChild('imageUpload') photo: ElementRef;
  @ViewChild('savePhotoButtonReference') savePhotoButton: jqxButtonComponent;

  image: any;
  imgSrc = '/projects/personal/src/assets/images/utilities/photo-avatar.jpg';

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

  emitPhoto(){
    let data = {
      photo: this.image,
    }

  	this.photoEvent.emit(data);
  }

}
