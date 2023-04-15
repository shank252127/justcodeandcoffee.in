import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}