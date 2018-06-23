import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'steam-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent {
  public chosenItem: any;

  @Input() items: any[];
  @Input() search: any;
  @Input() placeholder = 'Start typing...';
  @Output() onItemSelect = new EventEmitter();

  @ContentChild(TemplateRef) resultItemTemplate;

  constructor(private renderer: Renderer2) { }

  public selectItem($event, input: HTMLInputElement): void {
    $event.preventDefault();

    this.onItemSelect.emit($event.item);
    this.clearQuery(input);
  }

  public clearQuery(input?: HTMLInputElement): void {
    this.chosenItem = null;
    this.renderer.setValue(input, '');
  }
}
