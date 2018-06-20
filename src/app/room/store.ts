import { Genre } from '../core';

export const STORE = {
    games: [
        {
            name: 'Heroes of Might and Magic III',
            genre: Genre.RPG,
            logo: 'http://via.placeholder.com/200x200',
            description: `Gameplay consists of strategic exploration on the world map and tactical turn-based combat.
                As with the series in general, the player controls a number of "heroes" who act as generals and command troops
                comprising various types of creatures inspired by myth and legend. The player can complete or "win" a map by completing
                the objectives set out by the creator of the map. Objectives may include conquering all the towns in the map, gathering
                a set amount of resources, or piecing together a puzzle to find the Grail artifact. If a player loses all their heroes
                and towns, they will lose the game.`,
            playersCount: 6
        },
        {
            name: 'Minecraft',
            genre: Genre.RPG,
            logo: 'http://via.placeholder.com/50x50',
            description: '',
            playersCount: 80
        },
        {
            name: 'The Elder Scrolls: Online',
            genre: Genre.RPG,
            logo: 'http://via.placeholder.com/50x50',
            description: '',
            playersCount: 100
        },
        {
            name: 'Dota 2',
            genre: Genre.RPG,
            logo: 'http://via.placeholder.com/50x50',
            description: '',
            playersCount: 10
        },
        {
            name: 'Counter-Strike: Global Offensive',
            genre: Genre.Action,
            logo: 'http://via.placeholder.com/50x50',
            description: '',
            playersCount: 16
        },
        {
            name: 'Stronghold',
            genre: Genre.Strategy,
            logo: 'http://via.placeholder.com/50x50',
            description: '',
            playersCount: 4
        }
    ],
    players: [
        {
            nickname: 'stiker',
            clan: 'winter',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        },
        {
            nickname: 'nimp',
            clan: 'winter',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        },
        {
            nickname: 'pako',
            clan: 'winter',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        },
        {
            nickname: 'stalker',
            clan: 'winter',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        },
        {
            nickname: 'sandro',
            clan: 'fobos',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        },
        {
            nickname: 'benito',
            clan: 'fobos',
            avatar: {
                small: 'http://via.placeholder.com/50x50'
            }
        }
    ]
};
