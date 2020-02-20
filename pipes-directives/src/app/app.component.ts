import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <products></products>
    <bs-jumbotron>
      <div class="heading">
        Hello World!
      </div>
      <div class="body">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </div>
      <div class="button">
        Learn more
      </div>
    </bs-jumbotron>
  `
})
export class AppComponent {}

// <products></products>
