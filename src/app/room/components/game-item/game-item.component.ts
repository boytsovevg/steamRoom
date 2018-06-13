import { Component, Input } from '@angular/core';
import { Game } from '../../../core';

@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {

  @Input() game: Game;
}
