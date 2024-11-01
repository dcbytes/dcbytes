import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FirstKeyPipe } from "../pipes/first-key.pipe";

@Component({
  selector: 'app-form-error-message',
  standalone: true,
  imports: [CommonModule, FirstKeyPipe],
  templateUrl: './form-error-message.component.html',
  styleUrl: './form-error-message.component.scss',
})
export class FormErrorMessageComponent {
  @Input() control!: AbstractControl;
}
