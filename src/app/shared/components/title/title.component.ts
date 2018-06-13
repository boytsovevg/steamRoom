import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'steam-title',
  styleUrls: ['./title.component.scss'],
  template: `{{title}}`
})
export class TitleComponent {

  @Input() title: string;

  @HostBinding('style.color')
  @Input() color?: string;
}
