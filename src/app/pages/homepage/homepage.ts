import {Component, NgModule, OnInit} from '@angular/core';
import {SvgViewerModule} from '../../core/shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

@NgModule({
  imports: [SvgViewerModule, MatButtonModule, TranslateModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
