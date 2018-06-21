import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GamesDataService, PlayersDataService } from './data-services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GamesDataService,
    PlayersDataService
  ],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GamesDataService,
        PlayersDataService
      ]
    };
  }
}
