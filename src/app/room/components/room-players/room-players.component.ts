import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../../../core';

@Component({
    selector: 'room-players',
    templateUrl: './room-players.component.html',
    styleUrls: ['./room-players.component.scss']
})
export class RoomPlayersComponent {

    @Input() players: Player[];
    @Output() playersClear = new EventEmitter<void>();
    @Output() playerDelete = new EventEmitter<number>();

    public clearPlayers(): void {
        this.playersClear.emit();
    }

    public onPlayerDelete(playerIndex: number): void {
        this.playerDelete.emit(playerIndex);
    }
}
