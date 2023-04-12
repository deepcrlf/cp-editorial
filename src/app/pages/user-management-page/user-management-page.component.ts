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
      width: 150, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Role', field: 'role',
      search: true, filter: 'agTextColumnFilter',
      width: 70, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Date Created', field: 'createdDate',
      search: true, filter: 'agTextColumnFilter',
      width: 100, pivot: true, type: 'dimension',
    },
    {
      headerName: 'Action', field: 'date',
      search: true, filter: 'agTextColumnFilter',
      headerClass: 'text-right',
      cellRenderer: (params) => `<div class="text-center mt-2 pr-2"><span class="material-symbols-outlined medium-icon">
                              Edit
                            </span></div>`,
      width: 40, pivot: true, type: 'dimension',
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
  usersOriginal: any = [
    {
      firstName: 'Emma',
      lastName: 'Thompson',
      email: 'emma.thompson@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/02/2023',
      id: 1,
    },
    {
      firstName: 'Liam',
      lastName: 'Campbell',
      email: 'liam.commpbell@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '05/09/2021',
      id: 2,
    },
    {
      firstName: 'Olivia',
      lastName: 'Martin',
      email: 'olivia.martin@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '02/03/2019',
      id: 3,
    },
    {
      firstName: 'William',
      lastName: 'Garcia',
      email: 'william.garcia@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '14/10/2020',
      id: 4,
    },
    {
      firstName: 'Sophia',
      lastName: 'Anderson',
      email: 'sophia.anderson@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 5,
    },
    {
      firstName: 'Noah',
      lastName: 'Taylor',
      email: 'noah.taylor@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '05/09/2021',
      id: 6,
    },
    {
      firstName: 'Isabella',
      lastName: 'Wilson',
      email: 'isabella.wilson@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '14/10/2020',
      id: 7,
    },
    {
      firstName: 'James',
      lastName: 'Rodriguez',
      email: 'james.rodriguez@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '02/03/2019',
      id: 8,
    },
    {
      firstName: 'Mia',
      lastName: 'Jackson',
      email: 'mia.jackson@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 9,
    },
    {
      firstName: 'Benjamin',
      lastName: 'Martinez',
      email: 'benjamin.martinez@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '01/01/2019',
      id: 10,
    },
    {
      firstName: 'Charlotte',
      lastName: 'Phillips',
      email: 'charlotte.phillips@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 11,
    },
    {
      firstName: 'Elijah',
      lastName: 'Edwards',
      email: 'elijah.edwards@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 12,
    },
    {
      firstName: 'Amelia',
      lastName: 'Wood',
      email: 'amelia.wood@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 13,
    },
    {
      firstName: 'Lucas',
      lastName: 'Bennett',
      email: 'lucas.bennett@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 14,
    },
    {
      firstName: 'Harper',
      lastName: 'Barnes',
      email: 'harper.barnes@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 15,
    },
    {
      firstName: 'Alexander',
      lastName: 'Ross',
      email: 'alexander.ross@thecanadianpress.com',
      role: 'Publisher',
      createdDate: '12/10/2022',
      id: 16,
    },
  ];
  users: any = [];

  constructor(private ngxService: NgxUiLoaderService,
              public applicationService: ApplicationService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.showLoaders();

    this.users = [...this.usersOriginal];

    this.registerSubmenuEvents();

    this.applicationService.getUser().subscribe((userData: any) => {
      let user = this.users.find(item => item.id === userData.id);
      if (user) {
        user.role = userData.role;
        this.showLoaders();
        this.onFirstDataRendered();
      }
    });
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
      this.users = this.usersOriginal.filter(item => item.firstName.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
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
