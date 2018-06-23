import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Game } from '../../../core';

@Component({
    selector: 'room-games',
    templateUrl: './room-games.component.html',
    styleUrls: ['./room-games.component.scss']
})
export class RoomGamesComponent implements OnInit {

    @Input() games: Game[];
    @Output() onGameSelect = new EventEmitter<Game>();

    constructor() { }

    ngOnInit() {
    }

    public getGames = ($gameName: Observable<string>): Observable<Game[]> => {

        return $gameName.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            map(text => text.length < 2 ? [] :
                this.games.filter(game => game.name.toLowerCase().includes(text.toLowerCase()))
            )
        );
    }

    selectGame(game: Game): void {
        this.onGameSelect.emit(game);
    }

}
