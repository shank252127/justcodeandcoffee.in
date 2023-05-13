import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JsonFormatterComponent } from 'libs/devtools/json-formatter/json-formatter.component';
import { JsonToObjComponent } from './json-to-obj/json-to-obj.component';
import { JsonCompareComponent } from './json-compare/json-compare.component';
import { StringCompareComponent } from './string-compare/string-compare.component';
import { PhotoResizerComponent } from './photo-resizer/photo-resizer.component';

const routes: Routes = [
  {
    path: 'devtools',
    component: MainComponent,
    children: [
      {
        path: 'jsonformater',
        component: JsonFormatterComponent,
      },
      {
        path: 'jsoncomp',
        component: JsonCompareComponent,
      },
      {
        path: 'jsontoobj',
        component: JsonToObjComponent,
      },
      {
        path: 'stringcomp',
        component: StringCompareComponent,
      },
      {
        path: 'photoresizer',
        component: PhotoResizerComponent,
      },
    ],
  },
  // {
  //   path: 'devtools/jsonformater',
  //   component: JsonFormatterComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevtoolsRoutingModule {}
