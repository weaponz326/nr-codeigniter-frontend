import { Component, OnInit } from '@angular/core';

import { PortalApiService } from '../../portal-api.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskDetail: any;

  constructor(private portalApi: PortalApiService) { }

  ngOnInit(): void {
    this.portalApi.getSingleTask(sessionStorage.getItem('source_id'))
      .subscribe(
        res => {
          console.log(res);
          this.taskDetail = res;
        },
        err => {
          console.log(err);
        }
      )
  }

}
