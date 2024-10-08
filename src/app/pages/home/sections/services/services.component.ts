import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadlinerComponent } from '../../../../components/section-headliner/section-headliner.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeadlinerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
