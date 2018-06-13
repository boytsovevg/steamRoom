import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import {
  ChosenGameComponent,
  GameInfoComponent,
  GameItemComponent,
  GamesListComponent,
  PlayersCountComponent,
  RoomComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ChosenGameComponent,
    GameInfoComponent,
    GameItemComponent,
    GamesListComponent,
    PlayersCountComponent,
    RoomComponent,
  ],
  exports: [
    RoomComponent
  ]
})
export class RoomModule { }
