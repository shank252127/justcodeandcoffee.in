import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './main/project.component';
@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, ProjectRoutingModule, FormsModule],
})
export class ProjectModule {}
