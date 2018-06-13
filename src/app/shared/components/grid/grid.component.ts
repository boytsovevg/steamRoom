import { Component, Input } from '@angular/core';

@Component({
  selector: 'steam-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() grid: any[];
  @Input() gap: number[];
}
