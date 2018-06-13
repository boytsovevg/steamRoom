import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DescriptionComponent,
  FilledCountComponent,
  TextComponent,
  TitleComponent
} from './components';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DescriptionComponent,
    FilledCountComponent,
    TextComponent,
    TitleComponent,
  ],
  exports: [
    DescriptionComponent,
    FilledCountComponent,
    TextComponent,
    TitleComponent,
  ]
})
export class SharedModule { }
