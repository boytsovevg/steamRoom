import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AutosuggestComponent,
  ButtonComponent,
  DescriptionComponent,
  FilledCountComponent,
  GridComponent,
  IconComponent,
  ImageComponent,
  TextComponent,
  TitleComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AutosuggestComponent,
    ButtonComponent,
    DescriptionComponent,
    FilledCountComponent,
    GridComponent,
    IconComponent,
    ImageComponent,
    TextComponent,
    TitleComponent,
  ],
  exports: [
    FormsModule,
    NgbModule,
    AutosuggestComponent,
    ButtonComponent,
    DescriptionComponent,
    FilledCountComponent,
    GridComponent,
    IconComponent,
    ImageComponent,
    TextComponent,
    TitleComponent,
  ]
})
export class SharedModule { }
