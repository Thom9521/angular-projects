import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-birds></app-birds>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "bird-app";
}
