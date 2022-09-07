import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  result: number;
  currentScore: number;

  ngOnInit() {
    this.bowlingScore('25 46');
  }

  bowlingScore(frames) {
    var framesArr = frames.split(' ').map((frame) => [...frame]);
    console.log(framesArr);
    this.result = 0;

    for (var i = 0; i < framesArr.length; i++) {
      var current = framesArr[i];
      this.currentScore = parseInt(current[0]) + parseInt(current[1]);
      console.log(typeof this.currentScore);

      if (current[0] === 'X' && i < 9) {
        this.result += 10 + this.getNextElementsScore(framesArr, i, 2);
      } else if (current.length === 2 && this.currentScore === 10 && i < 9) {
        this.result = this.firstElementOfNextFrameForSpare(current);
        console.log('spareresult ' + this.result);
      } else if (current.length === 3) {
        this.result += this.getThreeRollScore(current);
      } else {
        this.result +=
          this.getElementScore(current, 0) + this.getElementScore(current, 1);
      }
    }
    console.log('finalresult+ ' + typeof this.result);
    return this.result;
  }

  firstElementOfNextFrameForSpare(framesArr: number): number {
    //if (framesArr) {
    console.log('spareelement' + framesArr[0] + framesArr[1]);
    return 10 + framesArr[0] + framesArr[1];
    //}
  }

  getNextElementsScore(framesArr, index, count) {
    console.log(framesArr, index, count);
    if (framesArr[index + 1]) {
      console.log('true');
      this.result = this.getElementScore(framesArr[index + 1], 0);
      var result2 = this.getElementScore(framesArr[index + 1], 1);
      console.log(' this.result+ ' + this.result);
      console.log('result 2+ ' + result2);

      if (framesArr[index + 1].length === 1) {
        return count === 1
          ? this.result
          : this.result + this.getElementScore(framesArr[index + 2], 0);
      }
      return count === 1
        ? this.result
        : result2 === 10 && this.result !== 10
        ? result2
        : result2 + this.result;
    }
  }

  getElementScore(frame, index) {
    //console.log('frame and index+ ' + frame, index);
    if (frame[index] === 'X' || frame[index] === '/') {
      return 10;
    }
    return parseInt(frame[index]);
  }

  getThreeRollScore(current) {
    var third = this.getElementScore(current, 2);
    var second = this.getElementScore(current, 1);
    var first = this.getElementScore(current, 0);

    return third === 10 && second !== 10
      ? third + first
      : second === 10 && first !== 10
      ? third + second
      : first + second + third;
  }
}
