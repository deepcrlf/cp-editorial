import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {MatDialog} from "@angular/material/dialog";
import {PublisherModalComponent} from "./publisher-modal/publisher-modal.component";
import {ApplicationService} from "../../services/application/application.service";
import {
  PublisherThumbnailTooltipComponent
} from "./publisher-thumbnail-tooltip/publisher-thumbnail-tooltip.component";

@Component({
  selector: 'app-publisher-page',
  templateUrl: './publisher-page.component.html',
  styleUrls: ['./publisher-page.component.scss']
})
export class PublisherPageComponent implements OnInit{
  @ViewChild('agGrid') agGrid: AgGridAngular;

  appliedThemeClassOnTable = 'ag-theme-material';
  publisherColumnDef = [
    {
      headerName: 'Image', field: 'thumbnail', search: true, filter: 'agTextColumnFilter',
      width: 20, pivot: true, type: 'dimension',
      tooltipField: 'thumbnail',
      cellRenderer: (params) => `<div class="text-center"><img class="publisher-thumbnail" src=${params.data.thumbnail} /></div>`,
    },
    {
      headerName: 'File Name', field: 'fileName',
      search: true, filter: 'agTextColumnFilter',
      width: 170, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Collection', field: 'collection',
      search: true, filter: 'agTextColumnFilter',
      width: 30, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Date Generated', field: 'date',
      search: true, filter: 'agTextColumnFilter',
      headerClass: 'text-right',
      width: 40, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Action', field: 'date',
      search: true, filter: 'agTextColumnFilter',
      headerClass: 'text-right',
      cellRenderer: (params) => `<div class="text-center mt-2"><span class="material-symbols-outlined medium-icon">
                              Edit
                            </span></div>`,
      width: 10, pivot: true, type: 'dimension',
    },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    tooltipComponent: PublisherThumbnailTooltipComponent,
  };

  gridApis: any = [];
  gridApi;
  gridColumnApi;
  gridColumnApis = [];
  selectedRowsPerPage = 20;
  currentAgGridPage = 0;
  totalAgGridPages = 0;
  publishersOriginal: any = [
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'afghanistan_evacuation.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'australian_bushfires.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'beirut_explosion.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'black_lives_matter_protest.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'brexit_referendum.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'capitol_hill_riot.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'covid-19_vaccination.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'gaza_conflict.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'hong_kong_protests.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'hurricane_ida.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'india_farmers_protest.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'myanmar_military_coup.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'north_korea_missile_test.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'paris_climate_agreement.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'rohingya_refugee_crisis.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'super_typhoon_rolly.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'syrian_civil_war.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'tokyo_olympics.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'united_states_election.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'yemen_humanitarian_crisis.jpeg',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/photo_edit.png',
      fileName: 'photo_edit.png',
      date: '10/11/2022',
      collection: 'TCP Collection',
      id: 1,
    },
  ];
  state;
  publishers: any = [];

  constructor(private ngxService: NgxUiLoaderService,
              public applicationService: ApplicationService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.showLoaders();

    this.publishers = [...this.publishersOriginal];

    this.registerSubmenuEvents();
  }

  registerSubmenuEvents() {
    this.applicationService.onRefreshFromSubmenu().subscribe(() => {
      this.showLoaders();
    });

    this.applicationService.onApplySubmenuDateFilter().subscribe(() => {
      this.showLoaders();
    });

    this.applicationService.onDownloadSubmenuDateFilter().subscribe(() => {
      this.showLoaders();
    });

    this.applicationService.onSubmenuSearch().subscribe((searchText) => {
      this.publishers = this.publishersOriginal.filter(item => item.fileName.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    });

    this.applicationService.getPinnedMenuOpen().subscribe(menuOpened => {
      this.onFirstDataRendered();
    });
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;

    this.onAgGridPaginationChanged();
  }

  onAgGridPaginationChanged(): void {
  }

  autoSizeAll(skipHeader): void {
    const allColumnIds: any = [];

    this.gridColumnApis.map((api: any) => {
      api.getColumns().forEach((column: any) => {
        allColumnIds.push(column.colId);
      });
      api.autoSizeColumns(allColumnIds, skipHeader);
    });
  }

  onFirstDataRendered(): void {
    setTimeout(() => {
      this.gridApis.map((api: any) => {
        if (window.innerWidth > 992) {
          api.sizeColumnsToFit();
        } else {
          this.autoSizeAll(false);
        }
      });
    }, 500, true);
  }

  goToAgGridLastPage(): void {
    this.pageChanged(this.totalAgGridPages);
  }

  pageChanged(currentPage): void {
    this.gridApi.paginationGoToPage(currentPage - 1);

    return currentPage;
  }

  showLoaders() {
    this.ngxService.startLoader("loader-1");

    setTimeout(() => {
      this.ngxService.stopLoader("loader-1");
    }, 1000);
  }

  onSelectionChanged(params: any): void {
    const dialogRef = this.dialog.open(PublisherModalComponent, {
      width: '1200px',
      data: params.api.getSelectedRows()[0]
    });
  }

}
