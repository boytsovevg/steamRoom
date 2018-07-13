import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GameDetails } from './../models';

@Injectable()
export class GamesDataService {

    private baseUrl = '/api/games';

    constructor(private http: HttpClient) {}

    getGameDetails(id): Observable<GameDetails> {

        return this.http.get(`${this.baseUrl}/getGameDetails`, {
            params: { id }
        }) as Observable<GameDetails>;
    }

}
