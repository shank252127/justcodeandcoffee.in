import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Feature Module;
import { HomePageModule } from '../../libs/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule, //Home Page - Includes Header + Main Section + Footer
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
