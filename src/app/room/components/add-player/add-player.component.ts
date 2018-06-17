import { Component } from '@angular/core';
import { Player, PlayersDataService } from '../../../core';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {

    public player: Player;

    constructor(private playersService: PlayersDataService) { }

    public getPlayerByName(event: any): void {

        this.playersService.getPlayerByName(event.target.value)
            .subscribe((player: Player) => {
                this.player = player;
            });
    }
}
