import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {ISelectCellEditorParams} from "ag-grid-community";

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss']
})
export class TrackerPageComponent implements OnInit{
  @ViewChild('agGrid') agGrid: AgGridAngular;
  appliedThemeClassOnTable = 'ag-theme-material';
  trackersColumnDefs = [
    {
      headerName: 'Slugline', field: 'slugLine', search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Article Id', field: 'articleId',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Apple Id', field: 'appleId',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Category', field: 'category',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Last Attempt Date', field: 'lastAttemptDate',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Status', field: 'status',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Publish', field: 'publish',
      search: true, filter: 'agTextColumnFilter',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Yes', 'No'],
      } as ISelectCellEditorParams,
      width: 100, pivot: true, type: 'dimension',
    },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  defaultColDefForFullScreenCard = {
    sortable: true,
    filter: 'agTextColumnFilter',
    resizable: true,
  };

  gridApis: any = [];
  gridApi;
  gridColumnApi;
  gridColumnApis = [];
  selectedRowsPerPage = 10;
  currentAgGridPage = 0;
  totalAgGridPages = 0;
  trackers: any = [
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
    {
      slugLine: "Published",
      articleId: "ZTDHMTYD",
      appleId: "XYV245f",
      category: "News",
      lastAttemptDate: "12/09/2022",
      status: "active",
      publish: "Yes",
      id: 1,
    },
  ];

  constructor(private ngxService: NgxUiLoaderService) {
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



}
