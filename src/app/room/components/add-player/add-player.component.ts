import { Component, EventEmitter, Output } from '@angular/core';
import { Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

    @Output() onPlayerAdd = new EventEmitter<Player>();

    public player: Player;
    public noResults = false;

    constructor(private playersService: PlayersDataService) { }

    public getPlayerByName(event: any): void {

        this.playersService.getPlayerByName(event.target.value)
            .subscribe((player: Player) => {
                if (!player) {
                    this.noResults = true;
                    this.player = null;
                    return;
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
