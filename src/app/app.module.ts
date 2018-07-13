
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RoomModule } from './room/room.module';
import { CoreModule } from './core/core.module';
import { LoadingModule } from './loading/loading.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoadingModule.forRoot(),
    CoreModule.forRoot(),
    RoomModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
