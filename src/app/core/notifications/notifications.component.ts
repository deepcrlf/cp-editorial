import {Component, OnInit} from '@angular/core';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
    isContainerOpened = false;

    notifications = [
        {
            name: 'Robert Kavcic',
            date: '11/06/2020',
            desc: 'Canadian Employers Elect to Hire More',
            id: 1,
        },
        {
            name: 'Michel Gregory',
            date: '11/06/2020',
            desc: 'Rates scenario for November 11, 2020',
            id: 2
        },
        {
            name: 'Michel Gregory',
            date: '11/06/2020',
            desc: 'Rates scenario for November 11, 2020',
            id: 3
        }
    ];

    constructor(public router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.isContainerOpened = false;
        });
    }

    ngOnInit(): void {
    }

    toggleContainer(toggle): void {
        if (toggle === null) {
            this.isContainerOpened = !this.isContainerOpened;
        } else {
            this.isContainerOpened = toggle;
        }
    }

    hideNotification(notification, event): void {
        event.preventDefault();
        event.stopPropagation();

        this.notifications = this.notifications.filter(notn => {
            return notn.id !== notification.id;
        });
    }

    clickedOutOfNotification(event): void {
        /*event.stopPropagation();
        event.preventDefault();*/

        this.isContainerOpened = false;
    }
}
