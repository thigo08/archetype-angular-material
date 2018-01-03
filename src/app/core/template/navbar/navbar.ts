import {Component, NgModule, Output, EventEmitter} from '@angular/core';
import {MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SECTIONS} from '../../shared/documentation-items/documentation-items';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {

  @Output() toggleSidenav = new EventEmitter<void>();

  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}
