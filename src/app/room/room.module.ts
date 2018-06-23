import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import {
  AddPlayerComponent,
  ChosenGameComponent,
  GameInfoComponent,
  GameItemComponent,
  GamesListComponent,
  PlayerCardComponent,
  PlayerItemComponent,
  PlayersCountComponent,
  RoomComponent,
  RoomGamesComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AddPlayerComponent,
    ChosenGameComponent,
    GameInfoComponent,
    GameItemComponent,
    GamesListComponent,
    PlayerItemComponent,
    PlayerCardComponent,
    PlayersCountComponent,
    RoomComponent,
    RoomGamesComponent,
  ],
  exports: [
    RoomComponent,
  ]
})
export class RoomModule { }
