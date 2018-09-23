import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [UserRequestApiService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    profile: any[];
    repos: any[];
    username: string;
    user: User;

    constructor(private userRequestService:UserRequestApiService) {

    }

      findUser(){
          this.userRequestService.updateProfile(this.username);
          this.userRequestService.getUser();
          this.user = this.userRequestService.user;
          console.log(this.user);

          this.userRequestService.getRepos().subscribe(data => {
              console.log(data);
              this.repos = data;
          });
      }

  ngOnInit() {
  }

}
