import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import {
  ChosenGameComponent,
  GameInfoComponent,
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
    PlayersCountComponent,
    RoomComponent
  ],
  exports: [
    RoomComponent
  ]
})
export class RoomModule { }
