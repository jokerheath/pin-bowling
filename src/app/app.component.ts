import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  rolls: any = [];
  scores: any;
  frameIndex: any = [];

  ngOnInit() {}

  randomBowl() {
    if (this.scores == null || 0) {
      this.scores = Math.floor(Math.random() * 11);
      console.log('firstScore+ ' + this.scores);
      this.roll(this.scores);
      return this.scores;
    }
    var rest = 11 - this.scores;
    this.scores = Math.floor(Math.random() * rest);
    this.roll(this.scores);

    return this.scores;
  }

  roll(pins) {
    this.rolls.push(pins); //save number of pins knocked every roll
    console.log(this.rolls);
    //console.log(this.score());
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < this.rolls.length; frameIndex++) {
      if (this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }

      let frameScore = this.sumFrame(rollIndex);
      if (this.isSpare(frameScore)) {
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }

      rollIndex += 2;
    }
    return score;
  }

  sumFrame(rollIndex) {
    console.log(
      'sumFrame+ ' + this.rolls[rollIndex] + this.rolls[rollIndex + 1]
    );

    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  spareBonus(rollIndex) {
    console.log('sparebonus+ ' + 10 + this.rolls[rollIndex + 2]);
    return 10 + this.rolls[rollIndex + 2];
  }
  strikeBonus(rollIndex) {
    console.log(
      'strikeBonus+' +
        10 +
        this.rolls[rollIndex + 1] +
        this.rolls[rollIndex + 2]
    );
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  isSpare(frameScore) {
    console.log(frameScore === 10);
    return frameScore === 10;
  }

  isStrike(rollIndex) {
    console.log(this.rolls[rollIndex] === 10);
    return this.rolls[rollIndex] === 10;
  }
}
