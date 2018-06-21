import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'steam-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder: string;

  ngOnInit() {
  }
}
