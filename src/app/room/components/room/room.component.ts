import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { STORE } from '../../store';
import { Game, Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'steam-room',
    providers: [
        PlayersDataService
    ],
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

    public games: Game[] = [];
    public players: Player[] = [];
    public chosenGame: Game;

    constructor(private playersService: PlayersDataService) {}

    ngOnInit() {

        this.games = STORE.games;
        this.players = STORE.players;
        this.chosenGame = this.games[0];
    }

    public addPlayer(player: Player): void {
        this.playersService.getPlayerGames(player.id)
            .subscribe(games => this.games = games);

        this.players.push(player);
    }

    public selectPlayer(player: Player): void {
        console.log(player);
    }

    public getPlayers = ($nickname: Observable<string>): Observable<Player[]> => {

        return $nickname.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            map(text => text.length < 2 ? [] :
                this.players.filter(player => player.nickname.includes(text))
            )
        );
    }

}
