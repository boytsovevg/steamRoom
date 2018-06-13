import { Component, Input, HostBinding } from '@angular/core';
import { ButtonTypes, Sizes } from '../../enums';


@Component({
  selector: 'steam-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button type="button">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {

  @Input() size?: Sizes = Sizes.md;
  @Input() type: ButtonTypes;
}
