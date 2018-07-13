import { Component, Input } from '@angular/core';
import { Genre } from '../../../core';

@Component({
    selector: 'game-info',
    templateUrl: './game-info.component.html',
    styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent {

    @Input() name: string;
    @Input() genre: Genre;
    @Input() hasMultiplayer: boolean;
}
