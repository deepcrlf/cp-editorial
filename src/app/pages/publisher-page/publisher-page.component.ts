import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {UserModalComponent} from "../user-management-page/user-modal/user-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {PublisherModalComponent} from "./publisher-modal/publisher-modal.component";

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
      headerName: 'Thumbnail', field: 'thumbnail', search: true, filter: 'agTextColumnFilter',
      width: 50, pivot: true, type: 'dimension',
      cellRenderer: (params) => `<img class="publisher-thumbnail" src=${params.data.thumbnail} />`
    },
    {
      headerName: 'File Name', field: 'fileName',
      search: true, filter: 'agTextColumnFilter',
      width: 200, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Date Generated', field: 'date',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  gridApis: any = [];
  gridApi;
  gridColumnApi;
  gridColumnApis = [];
  selectedRowsPerPage = 20;
  currentAgGridPage = 0;
  totalAgGridPages = 0;
  publishers: any = [
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
    {
      thumbnail: '/assets/images/cp/Professional_Headshots_21.jpeg',
      fileName: 'Professional_Headshots_21.jpeg',
      date: '10/11/2022',
      id: 1,
    },
  ];
  state;

  constructor(private ngxService: NgxUiLoaderService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.showLoaders();
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
      width: '900px',
      data: params.api.getSelectedRows()[0]
    });
  }

}
