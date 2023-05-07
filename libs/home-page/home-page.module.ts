import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageRoutingModule } from './home-page-routing.module';

// Material UI;
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [LandingPageComponent],
})
export class HomePageModule {}
