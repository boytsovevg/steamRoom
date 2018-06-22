import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game, GameItem } from '../../../core';

@Component({
    selector: 'games-list',
    templateUrl: './games-list.component.html',
})
export class GamesListComponent {

    @Input() games: GameItem[];
    @Output() onGameChoose = new EventEmitter<Game>();

    public chooseGame(game: Game): void {
        this.onGameChoose.emit(game);
    }
}
