import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomePageRoutingModule],
  exports: [LandingPageComponent],
})
export class HomePageModule {}
