import { Component, OnInit, VERSION } from '@angular/core';
import { Gratitude } from './pin-bowling-enum';

import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  VERSION,
} from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name: string;

  frames: any;
  rolls: any = [];
  totalScore: number = 0;
  currentRoll: number;
  wish: Gratitude;

  ngOnInit() {
    this.wish = Gratitude.Wish;
  }

  rollBowl() {
    this.rolls.push(this.randomNumber());
    this.score(this.rolls);
    console.log(this.randomNumber());
  }

  randomNumber() {
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
  createTotalPointsFrames = (rolls, frames = [], index = 0) => {
    if (frames.length === 10) return frames;

    this.currentRoll = rolls[index];
    console.log('current+' + this.currentRoll);
    const currentPlusNextRoll = this.currentRoll + rolls[index + 1];

    const isStrike = this.currentRoll === 10;
    const isSpare = currentPlusNextRoll === 10;

    if (isStrike || isSpare) {
      const points = currentPlusNextRoll + rolls[index + 2];
      const nextIndex = isStrike ? index + 1 : index + 2;

      return this.createTotalPointsFrames(
        rolls,
        [...frames, points],
        nextIndex
      );
    }

    return this.createTotalPointsFrames(
      rolls,
      [...frames, currentPlusNextRoll],
      index + 2
    );
  };

  score = (rollsValue = []) => {
    this.rolls = rollsValue;
    this.frames = this.createTotalPointsFrames(this.rolls);
    this.totalScore = 0;
    this.frames.forEach((value) => {
      if (value !== null && value != undefined && !isNaN(value)) {
        this.totalScore += value;
        console.log(this.totalScore);
      }
    });
  };
}
