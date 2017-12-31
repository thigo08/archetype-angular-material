import { CanActivateComponentSidenav } from './pages/component-sidenav/component-sidenav-can-load-guard';
import { ComponentSidenavModule } from './pages/component-sidenav/component-sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './shared/navbar/navbar';
import { HomepageModule } from './pages/homepage/homepage';
import { ThemePickerModule } from './shared/theme-picker/theme-picker';
import { FooterModule } from './shared/footer/footer';
import { ThemeStorage } from './shared/theme-picker/theme-storage/theme-storage';
import { StyleManager } from './shared/style-manager/style-manager';

import { AppComponent } from './app.component';
import { ComponentPageTitle } from './pages/page-title/page-title';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NavBarModule,
    HomepageModule,
    FooterModule,
    ComponentSidenavModule,
    ThemePickerModule
  ],
  providers: [
    ComponentPageTitle,
    CanActivateComponentSidenav,
    StyleManager,
    ThemeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
