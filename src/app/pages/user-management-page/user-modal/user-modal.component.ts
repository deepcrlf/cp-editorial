import {AfterViewInit, Component, HostListener, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../../../services/application/application.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit, AfterViewInit {
  roles = [
    {id: 'Publisher', name: 'Publisher', selected: true},
    {id: 'Editor', name: 'Editor', selected: false},
    {id: 'Admin', name: 'Admin', selected: false},
  ];
  userForm: FormGroup;
  submitted = false;
  role: any = null;

  constructor(private formBuilder: FormBuilder,
              public applicationService: ApplicationService,
              public dialogRef: MatDialogRef<UserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    // console.log(data);
  }

  ngAfterViewInit() {

  }

  onRoleSelect(role: any) {
    role.selected = !role.selected;
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [{value: '', disabled: true}],
      lastName: [{value: '', disabled: true}],
      email: [{value: '', disabled: true}],
      createdDate: [{value: '', disabled: true}],
    });
    if (this.data) {
      this.userForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        createdDate: this.data.createdDate,
      });

      this.role = this.data.role;
    }
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

    this.applicationService.setUser({...this.userForm.getRawValue(), role: this.role, id: this.data.id});
    this.dialogRef.close();

    /*this.toastr.success('<span>' +
       '<i class="icofont icofont-check-circled pr-2"></i>' +
       'Successfully updated the role' +
       '</span>', '',
       {
         closeButton: true,
         enableHtml: true
       }
     );*/

    return true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
