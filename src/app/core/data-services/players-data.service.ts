import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game, Player } from '../models';


@Injectable()
export class PlayersDataService {

    private baseUrl = '/api/account';

    constructor(private http: HttpClient) { }

    public getPlayerByName(name: string): Observable<Player> {

        return this.http.get(`${this.baseUrl}/getAccountByName`, {
            params: { name }
        }) as Observable<Player>;
    }

    public getPlayerGames(id: string): Observable<Game[]> {
        return this.http.get(`${this.baseUrl}/getAccountGames`, {
            params: { id }
        }) as Observable<Game[]>;
    }
}
