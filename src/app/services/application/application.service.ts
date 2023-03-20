import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private isLoggedIn = new BehaviorSubject<any>(false);
  private pinnedMenuOpen = new BehaviorSubject<any>(false);
  private isFilterContainerOpened = new BehaviorSubject<any>(false);
  private searchText = new BehaviorSubject<any>('');
  private user = new BehaviorSubject<any>('');
  private openLogInTool = new Subject<any>();

  constructor() {
  }

  setLoggedIn(loggedIn: any): void {
    this.isLoggedIn.next(loggedIn);
  }

  getLoggedInValue(): boolean {
    return this.isLoggedIn.value;
  }

  getLoggedIn(): Observable<any> {
    return this.isLoggedIn.asObservable();
  }

  setFilterContainerOpened(loggedIn: any): void {
    this.isFilterContainerOpened.next(loggedIn);
  }

  getFilterContainerOpenedValue(): boolean {
    return this.isFilterContainerOpened.value;
  }

  getFilterContainerOpened(): Observable<any> {
    return this.isFilterContainerOpened.asObservable();
  }

  setOpenLogInTool(isOpen: any): void {
    this.openLogInTool.next(isOpen);
  }

  getOpenLogInTool(): Observable<any> {
    return this.openLogInTool.asObservable();
  }

  setSearchText(searchText: any): void {
    this.searchText.next(searchText);
  }

  getSearchText(): Observable<any> {
    return this.searchText.asObservable();
  }

  setUser(searchText: any): void {
    this.user.next(searchText);
  }

  getUser(): Observable<any> {
    return this.user.asObservable();
  }

  setPinnedMenuOpen(searchText: any): void {
    this.pinnedMenuOpen.next(searchText);
  }

  getPinnedMenuOpen(): Observable<any> {
    return this.pinnedMenuOpen.asObservable();
  }
}
