import { Component, Input, OnChanges } from '@angular/core';
import { GameItem, GamesDataService } from '../../../core';

@Component({
    selector: 'chosen-game',
    templateUrl: './chosen-game.component.html',
    styleUrls: ['./chosen-game.component.scss']
})
export class ChosenGameComponent implements OnChanges {

    @Input() game: GameItem;
    @Input() playersInRoom: number;

    public genre: string;

    constructor(private gamesDataService: GamesDataService) { }

    ngOnChanges() {
        this.gamesDataService.getGameDetails(this.game.id)
            .subscribe(details => {
                this.game = {
                    ...this.game,
                    ...details
                };

                this.genre = this.game.genres.join(', ');
            });
    }
}
