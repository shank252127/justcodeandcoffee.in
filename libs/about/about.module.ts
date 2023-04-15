import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
//External Libraries;
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, FontAwesomeModule],
  exports: [AboutComponent],
})
export class AboutModule {}
