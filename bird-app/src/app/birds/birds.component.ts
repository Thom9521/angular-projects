import { Component, OnInit } from "@angular/core";
import { BirdService } from "../bird/bird.service";
@Component({
  selector: "app-birds",
  templateUrl: "./birds.component.html",
  styleUrls: ["./birds.component.css"],
  providers: [BirdService]
})
export class BirdsComponent implements OnInit {
  birds;
  constructor(birdService: BirdService) {
    this.birds = birdService.getBirds();
  }

  ngOnInit() {}
}
