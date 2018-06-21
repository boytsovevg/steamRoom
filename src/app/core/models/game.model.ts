import { Genre } from './../enums';

export interface Game {
    appid: number;
    name: string;
    genre: Genre;
    description: string;
    logo: string;
    playersCount: number;
}
