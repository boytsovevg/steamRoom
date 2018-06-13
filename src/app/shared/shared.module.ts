import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AutosuggestComponent,
  DescriptionComponent,
  FilledCountComponent,
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
    TextComponent,
    TitleComponent,
    AutosuggestComponent,
  ],
  exports: [
    FormsModule,
    NgbModule,
    AutosuggestComponent,
    DescriptionComponent,
    FilledCountComponent,
    TextComponent,
    TitleComponent,
  ]
})
export class SharedModule { }
