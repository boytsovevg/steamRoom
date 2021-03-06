import { Genre } from '../enums';

export interface GameDetails {
    id: number;
    name: string;
    developer: string;
    publisher: string;
    price: string;
    discount: string;
    languages: string[];
    genres: Genre[];
    tags: string[];
    hasMultiplayer: boolean;
}
