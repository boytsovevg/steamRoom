import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'steam-loading',
    styleUrls: ['./loading.component.scss'],
    template: `
      <div class="loading"></div>
    `
})
export class LoadingComponent {

    @Input() width: number;
    @Input() height: number;
}
