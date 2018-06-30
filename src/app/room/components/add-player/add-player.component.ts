import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

    public player$: Observable<Player>;
    public noResults = false;
    public isLoading: boolean;

    private player: Player;
    @Output() onPlayerAdd = new EventEmitter<Player>();

    constructor(private playersService: PlayersDataService) { }

    public getPlayerByName(event: any): void {

        this.isLoading = true;
        this.player$ = this.playersService.getPlayerByName(event.target.value);

        this.player$
            .subscribe(player => {

                this.isLoading = false;

                if (!player) {
                    this.noResults = true;
                    return null;
                }

                this.noResults = false;
                this.player = player;
            });
    }

    public addPlayer(): void {
        this.onPlayerAdd.emit(this.player);
        this.player$ = null;
    }
}
