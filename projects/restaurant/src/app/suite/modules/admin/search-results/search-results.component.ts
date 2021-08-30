import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminApiService } from '../admin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminApi: AdminApiService
  ) { }

  @Input() searchResults: any;
  @Input() searchQuery: any;
  @Output() viewDetailEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  viewDetail(userId){
    this.viewDetailEvent.emit(userId);
  }

}
