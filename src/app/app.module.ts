import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadersComponent } from './main/types/preloaders/preloaders.component';
import { FontStylesComponent } from './main/types/font-styles/font-styles.component';
import { FontColorsComponent } from './main/types/font-colors/font-colors.component';
import { HomeComponent } from './main/home/home.component';
import { PalettesComponent } from './main/types/palettes/palettes.component';
import { Animations1Component } from './main/types/animations1/animations1.component';
import { ThemesComponent } from './main/types/themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloadersComponent,
    FontStylesComponent,
    FontColorsComponent,
    HomeComponent,
    PalettesComponent,
    Animations1Component,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
