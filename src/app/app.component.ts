import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    //  TenPin Bowling II
    console.log('Original Tests:');

    function bowlingScore(frames) {
      let score = 0;
      let frame = frames.split(' ');
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
          (i === frame.length - 3 &&
            frame[i] === 'X' &&
            frame[i + 1] === 'X' &&
            frame[i + 2][0] === 'X') ||
          (i === frame.length - 2 &&
            frame[i] === 'X' &&
            frame[i + 1][0] === 'X' &&
            frame[i + 1][1] === 'X')
            ? (score = score + 30)
            : i === frame.length - 2 &&
              frame[i] === 'X' &&
              frame[i + 1][0] === 'X' &&
              !isNaN(frame[i + 1][1])
            ? (score = score + 20 + parseInt(frame[i + 1][1]))
            : i === frame.length - 2 &&
              frame[i].includes('/') &&
              frame[i + 1][0] === 'X'
            ? (score = score + 20)
            : !isNaN(frame[i])
            ? (score = score + parseInt(frame[i][0]) + parseInt(frame[i][1]))
            : frame[i] === 'X' && !isNaN(frame[i + 1])
            ? (score =
                score +
                10 +
                parseInt(frame[i + 1][0]) +
                parseInt(frame[i + 1][1]))
            : // : frame[i].includes('/') && !isNaN(frame[i+1]) | frame[i+1].includes('/') ? score = score + 10 + parseInt(frame[i+1][0])
            (frame[i] === 'X' && frame[i + 1].includes('/')) ||
              (frame[i].includes('/') && frame[i + 1] === 'X')
            ? (score = score + 20)
            : frame[i] === 'X' && frame[i + 1] === 'X' && frame[i + 2] === 'X'
            ? (score = score + 30)
            : // : frame[i] === 'X' && frame[i+1] === 'X' && frame[i+2].includes('/') | !isNaN(frame[i+2]) ? score = score + 20 + parseInt(frame[i+2][0])
              null;
        }
      }
      return score;
    }

    // Numerical
    console.log(bowlingScore('11 11 11 '), 20);
    //console.log(bowlingScore('15 27 81 43 26 05 16 22 13 43'), 66);
    //console.log(bowlingScore('15 27 81 43 43 26 05 16 22 31'), 66);
    // Numerical w/ Strikes
    // console.log(bowlingScore('X 11 11 11 X 11 11 11 11 11'), 40);
    console.log(bowlingScore('X 15 17 43 X 17 36 62 11 00'), 82);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 11 71'), 90);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 00 XXX'), 110);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 53 XXX'), 118);
    // console.log(bowlingScore('X 15 17 43 X 17 36 62 45 3/X'), 109);
    // // Numerical w/ Spares
    // console.log(bowlingScore('/ 11 11 11 / 11 11 11 11 11'), 38);
    // console.log(bowlingScore('/ 21 34 52 / 71 90 32 45 5/X'), 97);
    console.log(bowlingScore('X 15 17 43 X 17 36 / 62 3/X'), 116);
    // // Perfect Game
    // console.log(bowlingScore('X X X X X X X X X XXX'), 300);
    //
    console.log();
    //
    console.log('New Tests:');
    // Numerical w/ Strikes in a row
    // console.log(bowlingScore('X X 11 11 X X 11 X X 11'), 107);
    // console.log(bowlingScore('X X X 43 X X X 62 11 00'), 162);
    // console.log(bowlingScore('X X X X X X 36 62 11 71'), 189);
    // console.log(bowlingScore('X X 8/ 43 X 9/ X 62 00 XXX'), 165);
    // console.log(bowlingScore('X X 9/ 9/ X X X X 9/ XXX'), 247);
    // console.log(bowlingScore('X 6/ X X X 5/ 36 X 45 3/X'), 185);
    // console.log(bowlingScore('X 61 X X X 53 36 X 45 3/X'), 162);
    // // Numerical w/ Spares in a row
    // console.log(bowlingScore('2/ 5/ 11 11 4/ 3/ 11 8/ 9/ 11'), 88);
    // console.log(bowlingScore('6/ 8/ 4/ 52 9/ 4/ 7/ 32 45 5/X'), 132);
    // console.log(bowlingScore('5/ 7/ 9/ 3/ 5/ 17 36 4/ 62 3/X'), 136);
    // console.log(bowlingScore('5/ 7/ 9/ 3/ 5/ X X 4/ X XXX'), 208); //
    // console.log(bowlingScore('5/ 7/ 9/ 3/ 5/ 7/ 6/ 4/ 6/ 3/X'), 160);
    // console.log(bowlingScore('5/ 7/ 9/ 3/ 5/ 7/ 6/ 4/ 6/ X3/'), 167);
    // console.log(bowlingScore('5/ 7/ 9/ 3/ 5/ 7/ 6/ 4/ 6/ 71'), 152);
    // console.log(bowlingScore('X 9/ 3/ 6/ X 6/ 5/ 9/ X 3/X'), 183);
    // console.log(bowlingScore('X 9/ 9/ X X 9/ 9/ 9/ X 9/X'), 206);
    // console.log(bowlingScore('X X X X X X X X X X3/'), 283);
    // console.log(bowlingScore('X X X X X X X X X 3/X'), 273);
  }
}
