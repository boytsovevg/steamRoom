import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Loading } from './loading.model';


@Injectable()
export class LoadingService {

    private loadingSubject = new Subject<Loading>();
    public loadingState = this.loadingSubject.asObservable();

    public start(): void {
        console.log('loading start');
        this.loadingSubject.next(<Loading>{isLoading: true});
    }

    public end(): void {
        console.log('loading end');
        this.loadingSubject.next(<Loading>{isLoading: false});
    }
}
