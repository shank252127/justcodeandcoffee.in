import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './main/project.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, JsonFormatterComponent],
  imports: [CommonModule, ProjectRoutingModule, FormsModule],
})
export class ProjectModule {}
