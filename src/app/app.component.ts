import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  frames: any;
  rolls: any;
  totalScore: number = 0;
  currentRoll: number;

  ngOnInit() {
    this.score([2]);
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

  score = (rolls = []) => {
    this.rolls = rolls;
    this.frames = this.createTotalPointsFrames(rolls);
    console.log('this is frame ' + this.frames);

    console.log(
      'reduce method+' +
        this.frames.reduce(
          (totalPoints, currentPoint) => totalPoints + currentPoint
        )
    );

    this.frames.forEach((value) => {
      if (value !== null && value != undefined && !isNaN(value)) {
        this.totalScore += value;
        console.log(this.totalScore);
      }
    });
  };

  // roll = (pins = 0, accumulatedRolls = []) => [...accumulatedRolls, pins];
}
