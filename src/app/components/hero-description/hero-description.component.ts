import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-description.component.html',
  styleUrl: './hero-description.component.scss',
})
export class HeroDescriptionComponent {
  @Input()
  mainTitle = '';

  @Input()
  titleType: 'h1' | 'h2' = 'h2';
}
