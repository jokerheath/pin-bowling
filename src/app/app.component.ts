import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  VERSION,
} from '@angular/core';
import { BowlingComponent } from './scoreBoard/bowling/bowling.component';
import { ScoreBoardComponent } from './scoreBoard/score-board/score-board.component';
var $: any;

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
  turn: string;
  gameTotal: any;

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
    this.roll();
  }

  roll() {
    $(document).ready(function () {
      var bowling = this.bowling;
      var scoreBoard = this.scoreboard;
      var rollScore = 0;
      var scoreString = '0';
      var timeOut = 0;
      var i = 0;
      var total = '0';
      var turn = '0';
      var gameTotal = 0;

      $('#roll').click(function () {
        $('#roll').hide();
        $('.ball').attr('class', 'rolling');
        rollScore = bowling.roll();
        scoreString = scoreBoard.getScore(rollScore);
        total = scoreBoard.turnTotal();
        gameTotal = scoreBoard.sumTotal(rollScore);
        var num = (i += 1);
        timeOut = setTimeout(function () {
          $('.rolling').attr('class', 'ball');
          $('#score').text(scoreString);
          $('#roll').show();
          $('#roll-' + num).text(scoreString);
          $('#turn-score-' + turn).text(total);
          $('#total').text(gameTotal);
          turn = scoreBoard.currentTurn().toString();
        }, 2000);
      });
    });
  }
}
