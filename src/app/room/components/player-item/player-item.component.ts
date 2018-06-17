import { Component, Input } from '@angular/core';
import { Player } from '../../../core';

@Component({
  selector: 'player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent {

  @Input() player: Player;
}
