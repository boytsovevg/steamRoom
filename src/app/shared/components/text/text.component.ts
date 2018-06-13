import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'steam-text',
  styleUrls: ['./text.component.scss'],
  template: `
    <ng-content></ng-content>
  `
})
export class TextComponent {

  @HostBinding('style.max-width')
  @Input() maxWidth?: string;

  @HostBinding('style.font-size')
  @Input() size?: string;
}
