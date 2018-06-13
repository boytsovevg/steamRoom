import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomComponent } from './room/room.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RoomComponent
  ],
  exports: [
    RoomComponent
  ]
})
export class RoomModule { }
