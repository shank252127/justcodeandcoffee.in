import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Feature Module;
import { HomePageModule } from '../../libs/home-page/home-page.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//External Libraries;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule, //Home Page - Includes Header + Main Section + Footer,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
