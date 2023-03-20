import {Component} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Router} from "@angular/router";
import {ApplicationService} from "../../services/application/application.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  isLoginContainer = true;

  constructor(private ngxService: NgxUiLoaderService,
              public router: Router,
              public applicationService: ApplicationService) {
  }

  login() {
    this.ngxService.startLoader("loader-login-container");

    setTimeout(() => {
      this.ngxService.stopLoader("loader-login-container");
      this.applicationService.setLoggedIn(true);
      this.router.navigateByUrl('/dash');
    }, 1000);
  }

  goToLogin() {
    this.isLoginContainer = true;
  }

  goToForgotPassword() {
    this.isLoginContainer = false;
  }
}
