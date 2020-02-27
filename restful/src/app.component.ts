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
    <input class="form-control" type="search" [formControl]="searchControl" />
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div>user.base</div>
  `,
  providers: [GitHubService]
})
export class AppComponent {
  searchControl = new FormControl();
  isLoading = false;
  users = [];
  constructor(private _githubService: GitHubService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGitHubData(value).subscribe(data => {
          this.isLoading = false;
          this.users = data.items;
        });
      });
  }
}
