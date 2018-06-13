import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'steam-grid',
  styleUrls: ['./grid.component.scss'],
  template: `
    <ng-content></ng-content>
  `
})
export class GridComponent {

  @Input() grid: any[];

  @HostBinding('style.grid-gap')
  @Input() gap?: number[];
}
