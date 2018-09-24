import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserRequestApiService } from './user-http/user-request-api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangecolorDirective } from './changecolor.directive';
import { BoldenPipe } from './bolden.pipe';

// Defining routes
const routes:Routes=[
  {path:"home",component:UserProfileComponent},
  {path:"search",component:SearchComponent},
  {path:"search-repos",component:SearchReposComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SearchComponent,
    SearchReposComponent,
    NotFoundComponent,
    ChangecolorDirective,
    BoldenPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserRequestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
