import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "user",
  template: `
    <h1>User Login: {{ login }}</h1>
    <h2>User Score: {{ score }}</h2>
  `
})
//Implements Interfaces OnInit, OnDestroy
export class GitHubUserComponent implements OnInit, OnDestroy {
  login;
  score;
  subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    //Lifecycle hook + method
    this.subscription = this._route.params.subscribe(params => {
      //=> Callback function
      //Subscribe --> observeble + method
      this.login = params["login"]; //Parameter
      this.score = params["score"]; //Parameter
    });
  }

  ngOnDestroy() {
    //Lifecycle hook + method
    this.subscription.unsubscribe(); // Observeble + method
  }
}
