import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MyEmailAlertsService} from './my-email-alerts/my-email-alerts.service';
import {CompanyAndIndustryService} from './company-and-industry/company-and-industry.service';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
    ],
    providers: [
        MyEmailAlertsService,
        CompanyAndIndustryService,
    ]
})
export class AppServicesModule {
}
