import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
})
export class ScoreBoardComponent implements OnInit {
  firstScore: 0;
  secondScore: 0;
  isFirstTurn: Boolean = true;
  frame: [];
  allFrames: [];
  turn: 0;
  allTotals: [];
  frameArray: [];
  gameTotal: 0;

  constructor() {}

  ngOnInit() {}

  firstRoll = function (score) {
    this.firstScore = score;
    this.frame = [];
    this.frame.push(score);
    return this.firstScore.toString();
  };

  secondRoll = function (score) {
    this.secondScore = score;
    this.frame.push(score);
    this.storeFrames(this.frame);
    return this.secondScore.toString();
  };

  rollTurn = function () {
    if (this.frame.length % 2 === 0) {
      this.isFirstTurn = true;
      return this.isFirstTurn;
    }
    this.isFirstTurn = false;
    return this.isFirstTurn;
  };

  getScore = function (score) {
    if (this.rollTurn() === true) {
      return this.firstRoll(score);
    }
    return this.secondRoll(score);
  };

  storeFrames = function (frame) {
    this.allFrames.push(frame);
  };

  currentTurn = function () {
    this.turn = this.allFrames.length;
    return this.turn;
  };

  turnTotal = function () {
    this.currentTurn();
    this.frameArray = this.allFrames[this.turn - 1];
    if (this.frame.length == 2) {
      var frameTotal = this.frameArray[0] + this.frameArray[1];
    } else {
      var frameTotal = this.frame[0];
    }
    return frameTotal;
  };

  sumTotal = function (total) {
    console.log((this.gameTotal += total));
    return this.gameTotal;
  };
}
