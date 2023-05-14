import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonCompareComponent } from 'libs/devtools/json-compare/json-compare.component';
import { JsonFormatterComponent } from 'libs/devtools/json-formatter/json-formatter.component';
import { JsonToObjComponent } from 'libs/devtools/json-to-obj/json-to-obj.component';
import { PhotoResizerComponent } from 'libs/devtools/photo-resizer/photo-resizer.component';
import { StringCompareComponent } from 'libs/devtools/string-compare/string-compare.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('../courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('../project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'devtools/jsonformater',
    loadChildren: () =>
      import('../devtools/devtools.module').then((m) => m.DevtoolsModule),
    component: JsonFormatterComponent,
  },
  {
    path: 'devtools/jsoncomp',
    loadChildren: () =>
      import('../devtools/devtools.module').then((m) => m.DevtoolsModule),
    component: JsonCompareComponent,
  },
  {
    path: 'devtools/jsontoobj',
    loadChildren: () =>
      import('../devtools/devtools.module').then((m) => m.DevtoolsModule),
    component: JsonToObjComponent,
  },
  {
    path: 'devtools/stringcomp',
    loadChildren: () =>
      import('../devtools/devtools.module').then((m) => m.DevtoolsModule),
    component: StringCompareComponent,
  },
  {
    path: 'devtools/photoresizer',
    loadChildren: () =>
      import('../devtools/devtools.module').then((m) => m.DevtoolsModule),
    component: PhotoResizerComponent,
  },

  { path: '**', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
