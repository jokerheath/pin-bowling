import { Component, OnInit, VERSION } from '@angular/core';
import { Gratitude } from './pin-bowling-enum';

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
  getRandomNumber: number;
  showRoll: boolean = true;

  ngOnInit() {
    this.wish = Gratitude.Wish;
  }

  rollBowl() {
    this.rolls.push(this.randomNumber());
    this.score(this.rolls);
  }

  //random number generator between 0 and 10(both including)
  randomNumber() {
    this.getRandomNumber = Math.floor(Math.random() * (10 - 0) + 0);
    return this.getRandomNumber;
  }

  //it's a recursive function which will constantly calculate total score per frame as well as total overall score.
  createTotalPointsFrames = (rolls, frames = [], index = 0) => {
    if (frames.length === 10) {
      if (!isNaN(frames[9])) {
        this.showRoll = false;
      }
      return frames;
    }

    this.currentRoll = rolls[index];
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

  //calculating per frame score to give overall Total score
  score = (rollsValue = []) => {
    this.rolls = rollsValue;
    this.frames = this.createTotalPointsFrames(this.rolls);
    this.totalScore = 0;
    this.frames.forEach((value) => {
      if (value !== null && value != undefined && !isNaN(value)) {
        this.totalScore += value;
      }
    });
  };
}

//Implementation covered
//You should at least be able to throw a certain amount of pins per turn -- 2 pins per turm
//The game should understand the concept of ‘Strikes’ and ‘Spares’-- only the signs were not implemented, logical implemetation is done
//The scoring should update correctly for each turn taken-- implemented
//

//Still to implement
// sign "X" for strike and "/" for spare
//logical implementation for strike and spare is implemented
