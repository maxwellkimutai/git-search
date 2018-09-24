import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';


@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  providers: [UserRequestApiService],
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

    repos:any[];
    searchTerm:string;

    constructor(private searchApi:UserRequestApiService) { }

    findRepos () {
        this.searchApi.updateSearchTerm(this.searchTerm);
        this.searchApi.searchRepos();
        this.repos = this.searchApi.reposArray;
    }

  ngOnInit() {
  }

}
