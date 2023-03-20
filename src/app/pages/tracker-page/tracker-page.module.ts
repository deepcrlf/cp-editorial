import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';

import { TrackerPageRoutingModule } from './tracker-page-routing.module';
import { TrackerPageComponent } from './tracker-page.component';
import {AppCommonModule} from "../../core/app-common.module";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#cc212c',
  pbThickness: 4,
  pbColor: '#cc212c',
  overlayColor: 'rgba(203, 203, 203, 0.6)'
};

@NgModule({
  declarations: [
    TrackerPageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    AgGridModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    TrackerPageRoutingModule
  ]
})
export class TrackerPageModule { }
