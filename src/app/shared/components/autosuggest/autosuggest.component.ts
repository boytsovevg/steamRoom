import { Component, EventEmitter, Output, Input, ContentChild, TemplateRef } from '@angular/core';


@Component({
  selector: 'steam-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent {
  public chosenItem: any;

  @Input() items: any[];
  @Input() search: any;
  @Output() onItemSelect = new EventEmitter();

  @ContentChild(TemplateRef) resultItemTemplate;

  public selectItem({ item }): void {
    this.onItemSelect.emit(item);
  }
}
