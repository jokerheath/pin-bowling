import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    //  TenPin Bowling

    // frames = '11 11 11 11 11 11 11 11 11 11'
    function bowlingScore(frames) {
      let score = 0;
      let frame = frames.split(' ');
      if (frames.replace(/\s/g, '') === 'XXXXXXXXXXXX') {
        score = 300;
      } else {
        for (let i = 0; i < frame.length; i++) {
          if (i === frame.length - 1) {
            frame = frame[i].split('');
            for (let j = 0; j < frame.length; j++) {
              !isNaN(frame[j]) && frame[j + 1] !== '/'
                ? (score = score + parseInt(frame[j]))
                : frame[j] === 'X' || frame[j] === '/'
                ? (score = score + 10)
                : null;
            }
          } else {
            !isNaN(frame[i])
              ? (score = score + parseInt(frame[i][0]) + parseInt(frame[i][1]))
              : frame[i].includes('X') && !isNaN(frame[i + 1])
              ? (score =
                  score +
                  10 +
                  parseInt(frame[i + 1][0]) +
                  parseInt(frame[i + 1][1]))
              : frame[i].includes('/') && !isNaN(frame[i + 1])
              ? (score = score + 10 + parseInt(frame[i + 1][0]))
              : null;
          }
        }
      }
      return score;
    }

    // Numerical
    console.log(bowlingScore('11'), 20);
    console.log(bowlingScore('15 27 81 43 26 05 16 22 13 43'), 66);
    console.log(bowlingScore('15 27 81 43 43 26 05 16 22 31'), 66);
    // Numerical w/ Strikes
    console.log(bowlingScore('X 11 11 11 X 11 11 11 11 11'), 40);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 11 00'), 82);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 11 71'), 90);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 00 XXX'), 100);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 53 XXX'), 118);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 45 3/X'), 109);
    // // Numerical w/ Spares
    // console.log(bowlingScore('/ 11 11 11 / 11 11 11 11 11'), 38);
    // console.log(bowlingScore('/ 21 34 52 / 71 90 32 45 5/X'), 97);
    // console.log(bowlingScore('X 15 17 43 X 17 36 / 62 3/X'), 116);
    // // Perfect Game
    // console.log(bowlingScore('X X X X X X X X X XXX'), 300);
  }

  getRandomNumber() {
    console.log(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  }
}
