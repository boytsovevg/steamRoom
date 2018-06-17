
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RoomModule } from './room/room.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RoomModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
