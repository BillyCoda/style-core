import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadersComponent } from './main/types/preloaders/preloaders.component';
import { FontStylesComponent } from './main/types/font-styles/font-styles.component';
import { FontColorsComponent } from './main/types/font-colors/font-colors.component';
import { HomeComponent } from './main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloadersComponent,
    FontStylesComponent,
    FontColorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
