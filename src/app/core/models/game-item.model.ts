import { Game } from './game.model';
import { GameDetails } from './game-details.model';

export interface GameItem extends Game, GameDetails { }
