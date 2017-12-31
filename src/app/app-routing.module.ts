import { ComponentSidenav } from './pages/component-sidenav/component-sidenav';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Homepage} from './pages/homepage';

const routes: Routes = [
  { path: '', component: Homepage, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
