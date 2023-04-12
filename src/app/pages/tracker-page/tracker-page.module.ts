import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgGridModule} from 'ag-grid-angular';

import { TrackerPageRoutingModule } from './tracker-page-routing.module';
import { TrackerPageComponent } from './tracker-page.component';
import {AppCommonModule} from "../../core/app-common.module";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {TogglePublishComponent} from "./toggle-publish-component/toggle-publish.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PublishModalComponent} from "./publish-modal/publish-modal.component";
import {MatDialogModule} from "@angular/material/dialog";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#cc212c',
  pbThickness: 4,
  pbColor: '#cc212c',
  overlayColor: 'rgba(203, 203, 203, 0.6)'
};

@NgModule({
  declarations: [
    TrackerPageComponent,
    TogglePublishComponent,
    PublishModalComponent,
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    AgGridModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    TrackerPageRoutingModule
  ]
})
export class TrackerPageModule { }
