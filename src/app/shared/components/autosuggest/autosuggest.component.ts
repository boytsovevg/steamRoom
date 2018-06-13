import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'steam-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent {
  public chosenItem: any;

  @Input() items: any[];
  @Output() onItemSelect = new EventEmitter();

  @Input() search: any;

  public selectItem({ item }): void {
    this.onItemSelect.emit(item);
  }
}
