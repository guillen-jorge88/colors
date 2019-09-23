import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { ColorGridComponent } from './components/color-grid/color-grid.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    PagesComponent,
    ColorGridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    ClipboardModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    ColorGridComponent
  ]
})
export class PagesModule { }
