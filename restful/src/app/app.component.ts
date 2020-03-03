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
    <div>Base: {{ dataBase }}</div>
    <div>Date: {{ dataDate }}</div>
    <br />
    <div>SEK: {{ ratings.SEK }}</div>
    <div>CAD: {{ ratings.CAD }}</div>
    <div>HKD: {{ ratings.HKD }}</div>
    <div>ISK: {{ ratings.ISK }}</div>
    <div>DKK: {{ ratings.DKK }}</div>
  `,
  providers: [GitHubService]
})
export class AppComponent {
  searchControl = new FormControl();
  isLoading = false;
  dataBase: string;
  dataDate: string;
  ratings: any[];
  constructor(private _githubService: GitHubService) {}

  ngOnInit() {
    this.isLoading = true;
    this._githubService.getGitHubData().subscribe(data => {
      this.isLoading = false;
      this.ratings = data.rates;
      this.dataBase = data.base;
      this.dataDate = data.date;
      console.log(data.rates);
    });
  }
}
