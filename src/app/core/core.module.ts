import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GamesDataService, PlayersDataService } from './data-services';
import { ArrayService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ArrayService,
    GamesDataService,
    PlayersDataService,
  ],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ArrayService,
        GamesDataService,
        PlayersDataService,
      ]
    };
  }
}
