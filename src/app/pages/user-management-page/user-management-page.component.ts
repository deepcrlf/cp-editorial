import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {UserModalComponent} from "./user-modal/user-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {ApplicationService} from "../../services/application/application.service";

@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  appliedThemeClassOnTable = 'ag-theme-material';
  companiesColumnDefs = [
    {
      headerName: 'First name', field: 'firstName', search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Last name', field: 'lastName',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Email', field: 'email',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Role', field: 'role',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Date Created', field: 'createdDate',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  columnTypes = {
    dimension: {
      enableRowGroup: true,
      enablePivot: true,
    },
  };
  gridApis: any = [];
  gridApi;
  gridColumnApi;
  gridColumnApis = [];
  selectedRowsPerPage = 10;
  currentAgGridPage = 0;
  totalAgGridPages = 0;
  users: any = [
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 1,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 2,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 3,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 4,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 5,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 6,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 7,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 8,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 9,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 10,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 11,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 12,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 13,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 14,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 15,
    },
    {
      firstName: 'Jenny',
      lastName: 'Lee',
      email: 'jenny@canadian-press.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 16,
    },
  ];

  constructor(private ngxService: NgxUiLoaderService,
              public applicationService: ApplicationService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.showLoaders();
    this.applicationService.getUser().subscribe((userData: any) => {
      let user = this.users.find(item=> item.id === userData.id);
      if(user) {
        user.role = userData.role;
        this.showLoaders();
        this.onFirstDataRendered();
      }
    });
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridApis.push(params.api);
    this.gridColumnApi = params.columnApi;

    this.onAgGridPaginationChanged();
  }

  onSelectionChanged(params: any): void {
    console.log(params.api.getSelectedRows());
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '900px',
      data: params.api.getSelectedRows()[0]
    });
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
