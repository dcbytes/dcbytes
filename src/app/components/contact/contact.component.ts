import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  type FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactFormControls } from './contact.enums';
import { ContactService } from '../../services/contact.service';
import { FormErrorMessageComponent } from '../../shared/form-error-message/form-error-message.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMessageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactFormControls = ContactFormControls;
  contactForm!: FormGroup;

  formSent = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly contactService: ContactService,
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
}
