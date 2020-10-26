import { Component, OnInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  noteDetail: any;

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
    this.portalApi.getSingleTask(sessionStorage.getItem('source_id'))
      .subscribe(
        res => {
          console.log(res);
          this.noteDetail = res;
        },
        err => {
          console.log(err);
        }
      )
  }

}
