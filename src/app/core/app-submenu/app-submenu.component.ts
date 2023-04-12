import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {FormControl} from '@angular/forms';
import {ApplicationService} from "../../services/application/application.service";

@Component({
  selector: 'app-submenu',
  templateUrl: './app-submenu.component.html',
  styleUrls: ['./app-submenu.component.scss']
})
export class AppSubmenuComponent implements OnInit {
  isFullScreen = false;
  elem: any;
  isDateRangeContainerOpened = false;
  submenuSearchText = '';

  startDate = new FormControl(new Date('01/10/2023'));
  endDate = new FormControl(new Date('04/06/2023'));

  constructor(@Inject(DOCUMENT) private document: any, public applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.elem = document.documentElement;
  }

  submenuSearch() {
    this.applicationService.submenuSearch(this.submenuSearchText);
  }

  applySubmenuDateFilter() {
    this.applicationService.applySubmenuDateFilter({startDate: this.startDate, endDate: this.endDate});
  }

  downloadSubmenuDateFilter() {
    this.applicationService.downloadSubmenuDateFilter({startDate: this.startDate, endDate: this.endDate});
  }

  refreshSubmenu() {
    this.applicationService.refreshFromSubmenu();
  }

  toggleContainer(toggle): void {
    if (toggle === null) {
      this.isDateRangeContainerOpened = !this.isDateRangeContainerOpened;
    } else {
      this.isDateRangeContainerOpened = toggle;
    }
  }

  clickedOutOfDateRagne() {
    this.isDateRangeContainerOpened = false;
  }

  openFullscreen(): void {
    this.isFullScreen = true;

    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen(): void {
    this.isFullScreen = false;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
