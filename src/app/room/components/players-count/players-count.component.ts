import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'players-count',
  templateUrl: './players-count.component.html',
  styleUrls: ['./players-count.component.scss']
})
export class PlayersCountComponent {

  @Input() currentCount: number;
  @Input() totalCount: number;
}
