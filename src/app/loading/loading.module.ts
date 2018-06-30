import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [],
    declarations: [
        LoadingComponent
    ],
    providers: [
        LoadingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
          }
    ],
    exports: [

    ]
})
export class LoadingModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoadingModule,
            providers: [
                LoadingService
            ]
        };
    }
 }
