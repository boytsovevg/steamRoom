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
    }
  ];


  getPlayers = ($nickname: Observable<string>): Observable<Player[]> =>

    $nickname.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(text => text.length < 3 ? [] :
        this.players.filter(player => player.nickname.includes(text))
      )
    )
}
