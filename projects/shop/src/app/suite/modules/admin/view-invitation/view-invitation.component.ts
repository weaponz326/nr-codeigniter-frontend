import { Component, OnInit } from '@angular/core';

import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-view-invitation',
  templateUrl: './view-invitation.component.html',
  styleUrls: ['./view-invitation.component.css']
})
export class ViewInvitationComponent implements OnInit {

  constructor(private adminApi: AdminApiService) { }

  ngOnInit(): void {
  }

}
