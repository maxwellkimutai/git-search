import { Component, OnInit } from '@angular/core';
import { UserRequestApiService } from '../user-http/user-request-api.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  providers: [UserRequestApiService],
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    repos: any[];
    user: User;

  constructor(private userRequestService:UserRequestApiService) {
      this.userRequestService.getMyUser();
      this.user = this.userRequestService.user;

      this.userRequestService.getMyRepos();
      this.repos = this.userRequestService.reposArray;
  }

  ngOnInit() {
  }

}
