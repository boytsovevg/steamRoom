import { Component, OnInit } from '@angular/core';
import { Game, Genre } from '../../../core';


@Component({
  selector: 'steam-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public games: Game[] = [];

  ngOnInit() {
    this.games = [
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
  }

}
