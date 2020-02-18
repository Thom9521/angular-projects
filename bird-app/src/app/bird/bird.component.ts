import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bird",
  templateUrl: "./bird.component.html",
  styleUrls: ["./bird.component.css"]
})
export class BirdComponent implements OnInit {
  @Input() data;

  constructor() {}

  ngOnInit() {}
}
