import { Genre } from './../enums';

export interface Game {
    name: string;
    genre: Genre;
    description: string;
    logo: string;
    playersCount: number;
}
