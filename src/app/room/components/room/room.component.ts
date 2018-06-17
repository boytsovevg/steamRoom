import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { STORE } from '../../store';
import { Game, Genre, Player } from '../../../core';


@Component({
  selector: 'steam-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public games: Game[] = [];
  public players: Player[] = [];
  public chosenGame: Game;

  ngOnInit() {

    this.games = STORE.games;
    this.players = STORE.players;
    this.chosenGame = this.games[0];
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
