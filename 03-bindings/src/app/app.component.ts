import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1 id="title">{{ title }}</h1>
    <img src="{{ imageUrl }}" width="400rem" />
    <div class="mt-2">
      <button
        class="btn btn-primary btn-lg"
        [class.disabled]="!isValid"
        (click)="onClickSubmit()"
      >
        Submit
      </button>
      <p style="display: inline" class="ml-1">
        Submit button is {{ isValid }}!
      </p>
    </div>
    <div class="mt-2">
      <button type="button" class="btn btn-danger" (click)="onClickMe()">
        Danger
      </button>
      <button
        type="button"
        class="btn btn-warning ml-2"
        (click)="onClickWarning()"
      >
        Change title
      </button>
    </div>
    <p>{{ text }}</p>
  `
})
export class AppComponent {
  isValid = false;
  title = "Demo of Angular 2 bindings";
  text = "A new proptery-binding :-)";
  imageUrl =
    "https://www.audubon.org/sites/default/files/a1_4622_16_toco-toucan_peter_cavanagh_kk.jpg";
  onClickMe() {
    console.log("Submit button is: " + !this.isValid);
    this.isValid = !this.isValid;
  }
  onClickSubmit() {
    if (this.isValid) {
      alert("Hello world");
    }
  }
  onClickWarning() {
    document.getElementById("title").innerHTML =
      "Awesome new title 👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻👨‍💻";
  }
}
