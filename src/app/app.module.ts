
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RoomModule } from './room/room.module';
import { CoreModule } from './core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RoomModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
