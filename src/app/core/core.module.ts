import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/modules/shared.module';
import { NavigationFocusModule } from '../core/shared/navigation-focus/navigation-focus';
import { HomepageModule } from '../pages/homepage/homepage';

import { NavBar } from './template/navbar/navbar';
import { ThemePicker } from './template/theme-picker/theme-picker';
import { Footer } from './template/footer/footer';
import { ComponentSidenav } from './components/component-sidenav/component-sidenav';
import { ComponentPageHeader } from './components/component-page-header/component-page-header';

import { DocumentationItems } from '../core/shared/documentation-items/documentation-items';
import { StyleManager } from './template/style-manager/style-manager';
import { ThemeStorage } from './template/theme-picker/theme-storage/theme-storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    NavigationFocusModule,
    HomepageModule
  ],
  exports: [NavBar, ThemePicker, Footer, ComponentSidenav, ComponentPageHeader],
  declarations: [
    NavBar,
    ThemePicker,
    Footer,
    ComponentSidenav,
    ComponentPageHeader
  ],
  providers: [DocumentationItems, StyleManager, ThemeStorage]
})
export class CoreModule {}
