import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../core';

@Component({
  selector: 'chosen-game',
  templateUrl: './chosen-game.component.html',
  styleUrls: ['./chosen-game.component.scss']
})
export class ChosenGameComponent {

  @Input() game: Game;
}
