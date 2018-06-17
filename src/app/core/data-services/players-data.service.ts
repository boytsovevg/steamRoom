import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../models';


@Injectable()
export class PlayersDataService {

    private baseUrl = '/api/account';

    constructor(private http: HttpClient) { }

    public getPlayerByName(name: string): Observable<Player> {

        return this.http.get(`${this.baseUrl}/getAccountByName`, {
            params: { name }
        }) as Observable<Player>;
    }
}
