import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherPageRoutingModule } from './publisher-page-routing.module';
import { PublisherPageComponent } from './publisher-page.component';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {AgGridModule} from "ag-grid-angular";
import {AppCommonModule} from "../../core/app-common.module";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {PublisherModalComponent} from "./publisher-modal/publisher-modal.component";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#cc212c',
  pbThickness: 4,
  pbColor: '#cc212c',
  overlayColor: 'rgba(203, 203, 203, 0.6)'
};

@NgModule({
  declarations: [
    PublisherPageComponent,
    PublisherModalComponent,
  ],
  imports: [
    CommonModule,AppCommonModule,
    AppCommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AgGridModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    PublisherPageRoutingModule
  ]
})
export class PublisherPageModule { }
