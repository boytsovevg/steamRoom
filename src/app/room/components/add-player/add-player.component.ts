import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

    public noResults = false;
    private player: Player;
    @Output() onPlayerAdd = new EventEmitter<Player>();

    constructor(private playersService: PlayersDataService) { }

    public getPlayerByName(event: any): void {

        this.playersService.getPlayerByName(event.target.value)
            .subscribe(player => {

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
        this.player = null;
    }
}
