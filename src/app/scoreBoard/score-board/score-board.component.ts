import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
})
export class ScoreBoardComponent implements OnInit {
  firstScore: 0;
  secondScore: 0;
  isFirstTurn: Boolean = true;
  frame: any = [];
  allFrames: any = [];
  turn: 0;
  allTotals: [];
  frameArray: any = [];
  gameTotal: 0;

  constructor() {}

  ngOnInit() {}

  firstRoll(score) {
    this.firstScore = score;
    this.frame = [];
    this.frame.push(score);
    return this.firstScore.toString();
  }

  secondRoll(score) {
    this.secondScore = score;
    this.frame.push(score);
    this.storeFrames(this.frame);
    return this.secondScore.toString();
  }

  rollTurn() {
    if (this.frame.length % 2 === 0) {
      this.isFirstTurn = true;
      return this.isFirstTurn;
    }
    this.isFirstTurn = false;
    return this.isFirstTurn;
  }

  getScore(score) {
    if (this.rollTurn() === true) {
      return this.firstRoll(score);
    }
    return this.secondRoll(score);
  }

  storeFrames(frame) {
    this.allFrames.push(frame);
  }

  currentTurn() {
    this.turn = this.allFrames.length;
    return this.turn;
  }

  turnTotal() {
    this.currentTurn();
    this.frameArray = this.allFrames[this.turn - 1];
    if (this.frame.length == 2) {
      var frameTotal = this.frameArray[0] + this.frameArray[1];
    } else {
      var frameTotal = this.frame[0];
    }
    return frameTotal;
  }

  sumTotal(total) {
    console.log((this.gameTotal += total));
    return this.gameTotal;
  }
}
