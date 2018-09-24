import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class UserRequestApiService {

    public userName: string;
    private endpoint: string = "/users/";
    public searchTerm: string = "calculator";
    public user: User;
    public repository: Repository;
    public reposArray: any = [];

    constructor(private http:Http) {
        this.userName = "maxwellkimutai";
        this.user= new User("","","","","");
        this.repository=  new Repository("","","");
    }

    getMyUser () {
        let promise = new Promise ((resolve, reject) => {
            this.http.get(environment.apiUrl + this.endpoint + "maxwellkimutai" + "?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
                res => {
                    this.user.user = res.json().name;
                    this.user.login = res.json().login;
                    this.user.bio = res.json().bio;
                    this.user.link = res.json().html_url;
                    this.user.imageLink = res.json().avatar_url;
                    resolve();
                }, error => {
                    reject(error);
                }
            );
        });
        return promise;
    }

    getUser() {
        let promise = new Promise ((resolve, reject) => {
            this.http.get(environment.apiUrl + this.endpoint + this.userName + "?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
                res => {
                    this.user.user = res.json().name;
                    this.user.login = res.json().login;
                    this.user.bio = res.json().bio;
                    this.user.link = res.json().html_url;
                    this.user.imageLink = res.json().avatar_url;
                    resolve();
                }, error => {
                    reject(error);
                }
            );
        });
        return promise;
    }

    getMyRepos() {
        let promise = new Promise((resolve, reject) => {
            this.http.get(environment.apiUrl + this.endpoint + "maxwellkimutai" + "/repos?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
                res => {
                    for (let repo of res.json()){
                        this.repository.name = repo.name;
                        this.repository.description = repo.description;
                        this.repository.repoLink = repo.html_url;
                        this.reposArray.push(this.repository);
                        this.repository=  new Repository("","","");
                        resolve();
                    }
                }, error => {
                    reject(error);
                }
            );
        });
        return promise;
    }

    getRepos() {
        this.reposArray = [];
        let promise = new Promise((resolve, reject) => {
            this.http.get(environment.apiUrl + this.endpoint + this.userName + "/repos?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret).toPromise().then(
                res => {
                    for (let repo of res.json()){
                        this.repository.name = repo.name;
                        this.repository.description = repo.description;
                        this.repository.repoLink = repo.html_url;
                        this.reposArray.push(this.repository);
                        this.repository=  new Repository("","","");
                        resolve();
                    }
                }, error => {
                    reject(error);
                }
            );
        });
        return promise;
    }

    searchRepos() {
        this.reposArray = [];
        let promise = new Promise((resolve, reject) => {
            this.http.get(environment.apiUrl + "/search/repositories?q=" + this.searchTerm + "in:name").toPromise().then(
                res => {
                    for (let repo of res.json().items){
                        this.repository.name = repo.name;
                        this.repository.description = repo.description;
                        this.repository.repoLink = repo.html_url;
                        this.reposArray.push(this.repository);
                        this.repository=  new Repository("","","");
                        resolve();
                    }
                }, error => {
                    reject(error);
                }
            )
        })
    }

    updateSearchTerm(searchTerm:string) {
        this.searchTerm = searchTerm;
    }

    updateProfile(username:string) {
        this.userName = username;
    }

}
