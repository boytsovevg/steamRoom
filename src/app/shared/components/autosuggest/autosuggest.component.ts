import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

interface Player {
  nickname: string;
  clan: string;
  avatar: string;
}



@Component({
  selector: 'steam-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent {
  public chosenPlayer: Player;

  private players: Player[] = [
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


  getPlayers = ($nickname: Observable<string>): Observable<Player[]> =>

    $nickname.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(text => text.length < 2 ? [] :
        this.players.filter(player => player.nickname.includes(text))
      )
    )
}
