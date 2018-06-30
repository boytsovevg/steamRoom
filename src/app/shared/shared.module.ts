import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AutosuggestComponent,
  DescriptionComponent,
  FilledCountComponent,
  GridComponent,
  IconComponent,
  InputComponent,
  ImageComponent,
  LoadingComponent,
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
    DescriptionComponent,
    FilledCountComponent,
    GridComponent,
    IconComponent,
    InputComponent,
    ImageComponent,
    LoadingComponent,
    TextComponent,
    TitleComponent,
  ],
  exports: [
    FormsModule,
    NgbModule,
    AutosuggestComponent,
    DescriptionComponent,
    FilledCountComponent,
    GridComponent,
    IconComponent,
    InputComponent,
    ImageComponent,
    LoadingComponent,
    TextComponent,
    TitleComponent,
  ]
})
export class SharedModule { }
