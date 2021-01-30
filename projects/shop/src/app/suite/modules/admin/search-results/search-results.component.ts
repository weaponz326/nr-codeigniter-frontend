import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state){
      this.searchResults = this.router.getCurrentNavigation().extras.state;
      console.log(this.router.getCurrentNavigation().extras.state)
    }
  }

  searchResults: any;

  ngOnInit(): void {
  }

  goToDetail(){
    this.router.navigateByUrl('/suite/admin/search/search-detail');
  }

}
