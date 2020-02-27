import { Component } from "@angular/core";
import { GitHubService } from "./github.service";

import { filter, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  styles: [
    `
      .img {
        position: relative;
        float: left;
        width: 100px;
        height: 100px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    `
  ],
  template: `
    <h2>Ratings</h2>
    <div>SEK: {{ ratings.SEK }}</div>
    <div>CAD: {{ ratings.CAD }}</div>
    <div>HKD: {{ ratings.HKD }}</div>
    <div>ISK: {{ ratings.ISK }}</div>
  `,
  providers: [GitHubService]
})
export class AppComponent {
  searchControl = new FormControl();
  isLoading = false;
  // dataBase: string;
  ratings = [];
  constructor(private _githubService: GitHubService) {}

  ngOnInit() {
    this.isLoading = true;
    this._githubService.getGitHubData().subscribe(data => {
      this.isLoading = false;
      this.ratings = data.rates;
      console.log(data.rates);
    });
  }
}
