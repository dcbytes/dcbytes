import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../entities/contact-form.entity';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private readonly http: HttpClient) {}
  sendContactForm(contactForm: ContactForm) {
    return this.http.post<void>('contact', contactForm);
  }
}
