import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementPageRoutingModule } from './user-management-page-routing.module';
import { UserManagementPageComponent } from './user-management-page.component';
import {AppCommonModule} from "../../core/app-common.module";
import {AgGridModule} from "ag-grid-angular";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {UserModalComponent} from "./user-modal/user-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatCheckboxModule} from "@angular/material/checkbox";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#cc212c',
  pbThickness: 4,
  pbColor: '#cc212c',
  overlayColor: 'rgba(203, 203, 203, 0.6)'
};

@NgModule({
  declarations: [
    UserManagementPageComponent,
    UserModalComponent,
  ],
  imports: [
    CommonModule,AppCommonModule,
    AppCommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AgGridModule,
    MatCheckboxModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    UserManagementPageRoutingModule
  ]
})
export class UserManagementPageModule { }
