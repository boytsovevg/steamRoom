import { Component, Input } from '@angular/core';
import { Game } from './../../../core';

@Component({
  selector: 'game-search-result',
  templateUrl: './game-search-result.component.html',
  styleUrls: ['./game-search-result.component.scss']
})
export class GameSearchResultComponent {

  @Input() game: Game;
}
