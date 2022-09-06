import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.css'],
})
export class BowlingComponent implements OnInit {
  score: any;
  constructor() {}

  ngOnInit() {}

  roll(score) {
    if (score == null) {
      this.randomBowl();
      return this.score;
    }
    this.score = score;
    return this.score;
  }

  randomBowl() {
    if (this.score == null || 0) {
      this.score = Math.floor(Math.random() * 11);
      return this.score;
    }
    var rest = 11 - this.score;
    this.score = Math.floor(Math.random() * rest);
    return this.score;
  }
}
