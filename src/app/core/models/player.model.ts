import { Avatar } from './avatar.model';

export interface Player {
    id?: number;
    nickname: string;
    clan?: string;
    avatar: Avatar;
}
