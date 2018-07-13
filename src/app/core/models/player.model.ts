import { Avatar } from './avatar.model';
import { Game } from './game.model';

export interface Player {
    id: string;
    nickname: string;
    clan: string;
    avatar: Avatar;
    games?: Game[];
}
