import { Component } from '@angular/core';
import { Game, Player, PlayersDataService, ArrayService } from '../../../core';

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

    constructor(
        private arrayService: ArrayService,
        private playersService: PlayersDataService
    ) {}

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

    public clearPlayers(): void {
        this.players = [];
        this.games = [];
        this.gamesMap = null;
        this.chosenGame = null;
    }

    public deletePlayer(playerIndex: number): void {
        this.players.splice(playerIndex, 1);

        this.games = this.arrayService.getUniqBy(
            this.players.map(player => player.games),
            'id'
        );

        this.gamesMap = this.arrayService.getMap(this.games, 'id');
    }

    private getFilteredGames(games: Game[]): Game[] {

        if (this.gamesMap && games.length) {
            const filteredGames = games.filter(game => this.gamesMap.has(game.id));
            this.gamesMap = this.arrayService.getMap(filteredGames, 'id');

            return filteredGames;
        }

        this.gamesMap = this.arrayService.getMap(games, 'id');

        return[];
    }
}
