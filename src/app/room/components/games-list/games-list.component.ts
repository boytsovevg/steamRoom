import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../core';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  @Input() games: Game[];
}
