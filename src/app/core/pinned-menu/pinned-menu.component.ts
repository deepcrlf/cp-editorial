import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
import {MediaMatcher} from '@angular/cdk/layout';
import {ApplicationService} from '../../services/application/application.service';

@Component({
  selector: 'app-pinned-menu',
  templateUrl: './pinned-menu.component.html',
  styleUrls: ['./pinned-menu.component.scss']
})
export class PinnedMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('lobAccordion') lobAccordion: MatAccordion;
  dashboardMenuOpened = false;
  dashboardSearchOpened = false;
  insightSearchText = '';

  dashboardSearchResult = [
    {
      des: 'Overall 2021 And Three-year Guidance Both Largely As Expected',
      icon: '',
      analyst: 'Cosmous',
      state: 'Published'
    },
    {
      des: 'Overall 2021 And Three-year Guidance Both Largely As Expected',
      icon: '',
      analyst: 'Cosmous',
      state: 'Published'
    },
    {
      des: 'Overall 2021 And Three-year Guidance Both Largely As Expected',
      icon: '',
      analyst: 'Cosmous',
      state: 'Published'
    },
  ];

  toolsMenus = [
    {
      name: 'Tracker',
      icon: 'Table_Chart',
      tabUrl: '/tracker',
      tabName: 'Email Notifications'
    },
    {
      name: 'Photo Publisher', icon: 'Published_With_Changes',
      tabUrl: '/publisher', tabName: ''
    },
  ];
  adminMenus = [
    {
      name: 'Manage Users',
      icon: 'manage_accounts',
      tabUrl: '/users',
      tabName: 'Email Notifications'
    },
  ];
  helpMenus = [
    {name: 'Help', icon: 'Help', tabUrl: '/help', tabName: 'Help'}
  ];
  dashboardMenus: any = [];

  constructor(public router: Router,
              private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.searchInsight();
    this.applicationService.getPinnedMenuOpen().subscribe(menuOpened => {
      this.dashboardMenuOpened = menuOpened;
    });
    setTimeout(() => {
      this.lobAccordion.openAll();
    }, 300);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.lobAccordion.openAll();
    }, 300);
  }

  searchInsight(): void {
    if (this.insightSearchText) {
      this.dashboardMenus = [{
        name: 'Tools',
        group: [...this.toolsMenus.filter(item =>
          item.name.toLowerCase().indexOf(this.insightSearchText.toLowerCase()) >= 0)]
      },
        {
          name: 'Administration',
          group: [...this.adminMenus.filter(item =>
            item.name.toLowerCase().indexOf(this.insightSearchText.toLowerCase()) >= 0)]
        }, {
          name: 'Help',
          group: [...this.helpMenus.filter(item =>
            item.name.toLowerCase().indexOf(this.insightSearchText.toLowerCase()) >= 0)]
        }];
      setTimeout(() => {
        this.lobAccordion.openAll();
      }, 300);
      return;
    }

    this.dashboardMenus = [
      {name: 'Tools', group: [...this.toolsMenus]},
      {name: 'Administration', group: [...this.adminMenus]},
      {name: 'Help', group: [...this.helpMenus]}];

    setTimeout(() => {
      this.lobAccordion.openAll();
    }, 300);
  }

  openDashboardMenu(event): void {
    event.stopPropagation();

    this.dashboardMenuOpened = !this.dashboardMenuOpened;
  }

  clickedOutOfdashboardMenu(): void {
    /*event.stopPropagation();
    event.preventDefault();*/

    this.dashboardMenuOpened = false;
  }

  openDashboardSearch(event): void {
    event.stopPropagation();

    this.dashboardSearchOpened = !this.dashboardSearchOpened;
  }

  clickedOutOfDashboardSearch(event): void {
    /*event.stopPropagation();
    event.preventDefault();*/

    this.dashboardSearchOpened = false;
  }

  clickMainMenuLink(url): void {
    // this.dashboardMenuOpened = false;
    // this.applicationService.setPinnedMenuOpen(this.dashboardMenuOpened);
    this.router.navigateByUrl(url);
  }
}
