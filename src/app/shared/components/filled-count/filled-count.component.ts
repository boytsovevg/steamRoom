import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'filled-count',
  styleUrls: ['./filled-count.component.scss'],
  template: `
    {{ filledCount }}
  `
})
export class FilledCountComponent implements OnInit {

  @Input() currentCount: number;
  @Input() totalCount: number;

  public filledCount: string;

  ngOnInit() {
    this.filledCount = `${this.currentCount} / ${this.totalCount}`;
  }
}
