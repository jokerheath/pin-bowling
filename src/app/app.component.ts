import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  VERSION,
} from '@angular/core';
import { BowlingComponent } from './scoreBoard/bowling/bowling.component';
import { ScoreBoardComponent } from './scoreBoard/score-board/score-board.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  score: any;
  //test = true;
  rollScore: 0;
  scoreString: string;
  timeOut: any;
  i: 0;
  total: '0';
  turn: '0';
  gameTotal: number;

  constructor(
    private scoreboard: ScoreBoardComponent,
    private bowling: BowlingComponent,
    private el: ElementRef,
    private _renderer: Renderer2
  ) {}

  addRemoveClass() {
    //let myTag = this.el.nativeElement.querySelector("p"); // you can select html element by getelementsByClassName also, please use as per your requirement.
    //return document.getElementById('roll').getElementsByClassName('ball');
  }

  // hideNavBar() {
  //   this.test = false;
  // }

  ngOnInit() {
    //$(document).ready(function () {
    //var bowling = this.bowling;
    //var scoreBoard = this.scoreboard;

    //$('#roll').click(function () {
    // $('#roll').hide();
    //roll(){
    //this.addRemoveClass.classList.remove('ball');
    //$('.ball').attr('class', 'rolling');
    //this._renderer.setAttribute(this.ball.nativeElement, 'class', 'rolling');
    console.log('hre');
    this.rollScore = this.bowling.roll(3);
    console.log('therehre' + this.rollScore);
    this.scoreString = this.scoreboard.getScore(this.rollScore);
    console.log('scoreString' + this.scoreString);
    this.total = this.scoreboard.turnTotal();
    this.gameTotal = this.scoreboard.sumTotal(this.rollScore);
    var num = (this.i += 1);
    this.timeOut = setTimeout(function () {
      //$('.rolling').attr('class', 'ball');
      this._renderer.setAttribute(this.rolling.nativeElement, 'class', 'ball');

      //$('#score').text(this.scoreString);
      //document.getElementById('score').classList.te;
      // $('#roll').show();
      document.getElementById('roll').classList.add;
      //$('#roll-' + num).text(this.scoreString);
      //$('#turn-score-' + this.turn).text(this.total);
      //$('#total').text(this.gameTotal);
      this.turn = this.scoreboard.currentTurn().toString();
    }, 2000);
    // };
    //});
    //});
  }
}
