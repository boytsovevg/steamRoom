import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

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

    this.games = [
      {
        name: 'Heroes of Might and Magic III',
        genre: Genre.RPG,
        logo: 'http://via.placeholder.com/200x200',
        description: 'NO description',
        playersCount: 6
      }
      ,
      {
        name: 'Minecraft',
        genre: Genre.RPG,
        logo: 'http://via.placeholder.com/50x50',
        description: '',
        playersCount: 80
      },
      {
        name: 'The Elder Scrolls: Online',
        genre: Genre.RPG,
        logo: 'http://via.placeholder.com/50x50',
        description: '',
        playersCount: 100
      },
      {
        name: 'Dota 2',
        genre: Genre.RPG,
        logo: 'http://via.placeholder.com/50x50',
        description: '',
        playersCount: 10
      },
      {
        name: 'Counter-Strike: Global Offensive',
        genre: Genre.ACTION,
        logo: 'http://via.placeholder.com/50x50',
        description: '',
        playersCount: 16
      },
      {
        name: 'Stronghold',
        genre: Genre.STRATEGY,
        logo: 'http://via.placeholder.com/50x50',
        description: '',
        playersCount: 4
      }
    ];

    this.players = [
      {
        nickname: 'stiker',
        clan: 'winter',
        avatar: 'http://via.placeholder.com/50x50'
      },
      {
        nickname: 'nimp',
        clan: 'winter',
        avatar: 'http://via.placeholder.com/50x50'
      },
      {
        nickname: 'pako',
        clan: 'winter',
        avatar: 'http://via.placeholder.com/50x50'
      },
      {
        nickname: 'stalker',
        clan: 'winter',
        avatar: 'http://via.placeholder.com/50x50'
      },
      {
        nickname: 'sandro',
        clan: 'fobos',
        avatar: 'http://via.placeholder.com/50x50'
      },
      {
        nickname: 'benito',
        clan: 'fobos',
        avatar: 'http://via.placeholder.com/50x50'
      }
    ];

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
