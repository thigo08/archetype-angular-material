import {Component, EventEmitter, NgModule, Output} from '@angular/core';
import {ComponentPageTitle} from '../../../pages/page-title/page-title';
import {MatButtonModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'component-page-header',
  templateUrl: './component-page-header.html',
  styleUrls: ['./component-page-header.scss']
})
export class ComponentPageHeader {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._componentPageTitle.title;
  }
}
