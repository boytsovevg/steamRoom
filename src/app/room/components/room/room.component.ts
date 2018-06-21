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

    private gamesMap: Map<number, Game>;

    constructor(private playersService: PlayersDataService) {}

    ngOnInit() {

        // this.games = STORE.games;
        // this.players = STORE.players;
        // this.chosenGame = this.games[0];
    }

    public addPlayer(player: Player): void {
        this.playersService.getPlayerGames(player.id)
            .subscribe((games: Game[]) => {
                this.games = this.getGames(games);
                console.log(this.games);
            });

            this.players.push(player);
    }

    private getGames(games: Game[]): Game[] {
        if (this.games.length) {
            const filteredGames = games.filter(game => this.gamesMap.has(game.id));
            this.updateGameMap(filteredGames);

            return filteredGames;
        }

        this.updateGameMap(games);

        return Array.from(this.gamesMap.values());
    }

    private updateGameMap(games): void {
        this.gamesMap = new Map<number, Game>();
        for (const game of games) {
            this.gamesMap.set(game.id, game);
        }
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
