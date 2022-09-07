import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  result: number;

  ngOnInit() {
    this.bowlingScore('24 64 34 34 34 67 56');
  }

  bowlingScore(frames) {
    var framesArr = frames.split(' ').map((frame) => [...frame]);
    console.log(framesArr);
    this.result = 0;

    for (var i = 0; i < framesArr.length; i++) {
      var current = framesArr[i];

      if (current[0] === 'X' && i < 9) {
        this.result += 10 + this.getNextElementsScore(framesArr, i, 2);
      } else if (current.length === 2 && current[1] === '/' && i < 9) {
        this.result += 10 + this.getNextElementsScore(framesArr, i, 1);
      } else if (current.length === 3) {
        this.result += this.getThreeRollScore(current);
      } else {
        this.result +=
          this.getElementScore(current, 0) + this.getElementScore(current, 1);
      }
    }
    console.log(this.result);
    return this.result;
  }

  getNextElementsScore(framesArr, index, count) {
    this.result = this.getElementScore(framesArr[index + 1], 0);
    var result2 = this.getElementScore(framesArr[index + 1], 1);

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

  getElementScore(frame, index) {
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
