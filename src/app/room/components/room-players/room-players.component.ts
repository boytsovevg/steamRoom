import { Component, Input } from '@angular/core';
import { Player } from '../../../core';

@Component({
  selector: 'room-players',
  templateUrl: './room-players.component.html',
  styleUrls: ['./room-players.component.scss']
})
export class RoomPlayersComponent {

  @Input() players: Player[];
}
