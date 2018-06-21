import { Genre } from './../enums';

export interface Game {
    id: number;
    name: string;
    genre: Genre;
    description: string;
    logo: string;
    playersCount: number;
}
