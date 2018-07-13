import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'steam-text',
  styleUrls: ['./text.component.scss'],
  template: `
    <span [title]="title">
      <ng-content></ng-content>
    </span>
  `
})
export class TextComponent {

  @Input() title?: string;

  @HostBinding('style.max-width')
  @Input() maxWidth?: string;

  @HostBinding('style.font-size')
  @Input() size?: string;
}
