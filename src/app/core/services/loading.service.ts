import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

    public start(): void {
        console.log('loading start');
    }

    public end(): void {
        console.log('loading end');
    }
}
