import { Component, Input } from '@angular/core';
import { GameItem } from '../../../core';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  @Input() games: GameItem[];
}
