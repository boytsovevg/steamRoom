import { LoadingModule } from './../loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import {
  AddPlayerComponent,
  ChosenGameComponent,
  GameInfoComponent,
  GameItemComponent,
  GamesListComponent,
  GameSearchResultComponent,
  PlayerCardComponent,
  PlayerItemComponent,
  PlayersCountComponent,
  RoomComponent,
  RoomGamesComponent,
  RoomPlayersComponent,
} from './components';


@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    SharedModule
  ],
  declarations: [
    AddPlayerComponent,
    ChosenGameComponent,
    GameInfoComponent,
    GameItemComponent,
    GamesListComponent,
    GameSearchResultComponent,
    PlayerItemComponent,
    PlayerCardComponent,
    PlayersCountComponent,
    RoomComponent,
    RoomGamesComponent,
    RoomPlayersComponent,
  ],
  exports: [
    RoomComponent,
  ]
})
export class RoomModule { }
