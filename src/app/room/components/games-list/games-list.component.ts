import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game, GameItem } from '../../../core';

@Component({
    selector: 'games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

    @Input() games: GameItem[];
    @Output() gameChoose = new EventEmitter<Game>();

    public chooseGame(game: Game): void {
        this.gameChoose.emit(game);
    }
}
