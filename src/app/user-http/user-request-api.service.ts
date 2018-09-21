import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserRequestApiService {

    user: User;
    private userName: string;
    private clientId = "abeb90549ecafe81772b";
    private clientSecret = "3b0ba14362f0ffcbde5bac457f82c620daf8b180";
    private endpoint: string = "/users/";

    constructor(private http:HttpClient) {
        this.userName = "maxwellkimutai"
        this.user = new User("","",0);
    }

    getUser() {
        interface ApiResponse{
            login:string,
            html_url:string,
            repos:number
        }
        let promise = new Promise((resolve,reject)=> {
            this.http.get(environment.apiUrl + this.endpoint + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret).toPromise().then(response=>{
                // this.user.user = response.login;
                // this.user.link = response.html_url;
                // this.user.repos = response.public_repos;
                console.log(response);
                resolve();
            },error=>{

            }
            )
        })
        return promise;
    }
}
