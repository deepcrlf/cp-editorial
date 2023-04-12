import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Router} from "@angular/router";
import {ApplicationService} from "../../services/application/application.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isLoginContainer = true;
  submitted = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private ngxService: NgxUiLoaderService,
              public router: Router,
              public applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get fmp(): any {
    return this.userForm.controls;
  }

  onSubmitUserProfile() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    /*this.toastr.success('<span>' +
       '<i class="icofont icofont-check-circled pr-2"></i>' +
       'Successfully updated the role' +
       '</span>', '',
       {
         closeButton: true,
         enableHtml: true
       }
     );*/

    this.login();
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
