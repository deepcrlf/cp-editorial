import {AfterViewInit, Component, HostListener, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../../../services/application/application.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './publisher-modal.component.html',
  styleUrls: ['./publisher-modal.component.scss']
})
export class PublisherModalComponent implements OnInit, AfterViewInit {
  roles = [
    {id: 'Yes', name: 'Yes'},
    {id: 'No', name: 'No'},
  ];
  userForm: FormGroup;
  submitted = false;
  role: any = null;

  constructor(private formBuilder: FormBuilder,
              public applicationService: ApplicationService,
              public dialogRef: MatDialogRef<PublisherModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    // console.log(data);
  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [{value: '',}],
      lastName: [{value: '', }],
      email: [{value: '', }],
      createdDate: [{value: '', }],
    });
    if (this.data) {
      this.userForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.fileName,
        email: this.data.email,
        createdDate: this.data.date,
      });

      this.role = this.role[0].id;
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
