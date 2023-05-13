import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevtoolsRoutingModule } from './devtools-routing.module';
import { MainComponent } from './main/main.component';
import { JsonToObjComponent } from './json-to-obj/json-to-obj.component';
import { StringCompareComponent } from './string-compare/string-compare.component';
import { JsonCompareComponent } from './json-compare/json-compare.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';

import { FormsModule } from '@angular/forms';
import { PhotoResizerComponent } from './photo-resizer/photo-resizer.component';
@NgModule({
  declarations: [
    MainComponent,
    JsonToObjComponent,
    StringCompareComponent,
    JsonCompareComponent,
    JsonFormatterComponent,
    PhotoResizerComponent,
  ],
  imports: [CommonModule, FormsModule, DevtoolsRoutingModule],
})
export class DevtoolsModule {}
