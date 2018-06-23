import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../../../core';

@Component({
    selector: 'room-players',
    templateUrl: './room-players.component.html',
    styleUrls: ['./room-players.component.scss']
})
export class RoomPlayersComponent {

    @Input() players: Player[];
    @Output() onPlayersClear = new EventEmitter<void>();
    @Output() onPlayerDelete = new EventEmitter<number>();

    public clearPlayers(): void {
        this.onPlayersClear.emit();
    }

    public deletePlayer(playerIndex: number): void {
        this.onPlayerDelete.emit(playerIndex);
    }
}
