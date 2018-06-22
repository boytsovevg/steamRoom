import { Component, Input, OnInit } from '@angular/core';
import { GameItem, GamesDataService } from '../../../core';

@Component({
    selector: 'game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

    @Input() game: GameItem;

    public genre: string;

    constructor(private gamesDataService: GamesDataService) { }

    ngOnInit() {
        // this.gamesDataService.getGameDetails(this.game.id)
        //     .subscribe(details => {
        //         this.game = {
        //             ...this.game,
        //             ...details
        //         };

        //         this.genre = this.game.genres.join(', ');
        //     });
    }
}
