import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { GamesDataService, PlayersDataService } from './data-services';
import { LoadingService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GamesDataService,
    LoadingService,
    PlayersDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GamesDataService,
        LoadingService,
        PlayersDataService,
      ]
    };
  }
}
