import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-section-headliner',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  templateUrl: './section-headliner.component.html',
  styleUrl: './section-headliner.component.scss',
})
export class SectionHeadlinerComponent {
  @Input()
  mainTitle: string;

  @Input()
  description: string;
}
