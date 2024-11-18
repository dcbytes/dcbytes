import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactFormControls } from './contact.enums';
import { ContactService } from '../../services/contact.service';
import { FormErrorMessageComponent } from '../../shared/form-error-message/form-error-message.component';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private formUrl =
    'https://script.google.com/macros/s/AKfycbx8Jf9e9xE7zVEQeC6v-2h4lD4suG68wzvP8ubGw8sEB4MIlQUA46hTmrnUgyHwF_eh/exec';
  contactFormControls = ContactFormControls;
  contactForm!: FormGroup;

  formSent = false;

  constructor(
    private readonly http: HttpClient,
    private readonly formBuilder: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly contactService: ContactService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      [this.contactFormControls.NAME]: ['', Validators.required],
      [this.contactFormControls.EMAIL]: [
        '',
        [Validators.required, Validators.email],
      ],
      [this.contactFormControls.MESSAGE]: ['', Validators.required],
    });
  }

  sendContactForm() {
    this.contactService.sendContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.formSent = true;
        this.toastr.success('Message sent successfully');
      },
      error: () => {
        this.toastr.error('Error sending message');
      },
    });
  }

  private getFormData(): any {
    const formData: any = {};
    const formControls = this.contactForm.controls;

    Object.keys(formControls).forEach((key) => {
      const control = formControls[key];
      formData[key] = control.value;

      if (control instanceof FormGroup) {
        const nestedGroup = this.getFormDataNested(control);
        formData[key] = nestedGroup;
      }
    });

    formData.formDataNameOrder = JSON.stringify(Object.keys(formData));
    formData.formGoogleSheetName = 'responses'; // Default sheet name
    formData.formGoogleSendEmail = ''; // Default email value

    return formData;
  }

  private getFormDataNested(formGroup: FormGroup): any {
    const nestedData: any = {};
    const controls = formGroup.controls;

    Object.keys(controls).forEach((key) => {
      nestedData[key] = controls[key].value;
    });

    return nestedData;
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      this.loadingService.show();
      const formattedData = this.getFormData();
      const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      const body = new URLSearchParams(formattedData).toString();

      this.http.post(this.formUrl, body, { headers }).subscribe({
        next: () => {
          this.toastr.success('Message sent successfully');
          this.contactForm.reset();
          this.formSent = true;
          this.loadingService.hide();
        },
        error: (e) => {
          console.log(e);
          this.toastr.error('Error sending message. Please try again later');
          this.loadingService.hide();
        },
      });
    }
  }
}
