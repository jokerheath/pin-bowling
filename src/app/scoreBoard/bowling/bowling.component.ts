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
      console.log(this.score);
      this.randomBowl();
      return this.score;
    }
    this.score = score;
    console.log(this.score);
    return this.score;
  }

  randomBowl() {
    if (this.score == null || 0) {
      this.score = Math.floor(Math.random() * 11);
      console.log(this.score);
      return this.score;
    }
    var rest = 11 - this.score;
    this.score = Math.floor(Math.random() * rest);
    console.log('randomBowl' + this.score);
    return this.score;
  }
}
