import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScoreBoardComponent } from './scoreBoard/score-board/score-board.component';
import { BowlingComponent } from './scoreBoard/bowling/bowling.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ScoreBoardComponent],
  bootstrap: [AppComponent],
  providers: [ScoreBoardComponent, BowlingComponent],
})
export class AppModule {}
