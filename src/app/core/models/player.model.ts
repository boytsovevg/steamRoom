import { Avatar } from './avatar.model';

export interface Player {
    id: string;
    nickname: string;
    clan?: string;
    avatar: Avatar;
}
