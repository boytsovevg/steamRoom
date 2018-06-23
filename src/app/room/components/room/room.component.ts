import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Game, Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'steam-room',
    providers: [
        PlayersDataService
    ],
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss']
})
export class RoomComponent {

    public games: Game[] = [];
    public players: Player[] = [];
    public chosenGame: Game;

    private gamesMap: Map<number, Game>;

    constructor(private playersService: PlayersDataService) {}

    public addPlayer(player: Player): void {
        this.playersService.getPlayerGames(player.id)
            .subscribe((games: Game[]) => {
                player.games = games;
                this.games = this.getFilteredGames(games);
            });

            this.players.push(player);
    }

    public setChosenGame(game: Game): void {
        this.chosenGame = game;
    }

    private getFilteredGames(games: Game[]): Game[] {

        if (this.gamesMap && games.length) {
            const filteredGames = games.filter(game => this.gamesMap.has(game.id));
            this.updateGameMap(filteredGames);

            return filteredGames;
        }

        this.updateGameMap(games);

        return [];
    }

    private updateGameMap(games): void {
        this.gamesMap = new Map<number, Game>();

        for (const game of games) {
            this.gamesMap.set(game.id, game);
        }
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

}
