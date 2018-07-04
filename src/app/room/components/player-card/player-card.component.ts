import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './../../../core';

@Component({
    selector: 'player-card',
    templateUrl: './player-card.component.html',
    styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

    @Input() player: Player;
    @Input() playerIndex: number;
    @Output() playerDelete = new EventEmitter<number>();

    public deleteCard(): void {
        this.playerDelete.emit(this.playerIndex);
    }
}
