import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(){
    this.router.navigateByUrl('/suite/portal/search/search-detail');
  }

}
