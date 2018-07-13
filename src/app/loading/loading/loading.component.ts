import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from '../loading.service';
import { Loading } from '../loading.model';


@Component({
    selector: 'steam-loading',
    styleUrls: ['./loading.component.scss'],
    template: `
        <div [hidden]="!isLoading"
            [class.loading_fullscreen]="fullscreen"
            class="loading">
        </div>
    `
})
export class LoadingComponent implements OnInit, OnDestroy {

    @Input() fullscreen?: boolean;

    public isLoading = false;
    private loadingSubscription: Subscription;

    constructor(private loadingService: LoadingService) { }

    ngOnInit(): void {

        this.loadingSubscription = this.loadingService.loadingState
            .subscribe((state: Loading) => {
                this.isLoading = state.isLoading;
            });
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }

}
