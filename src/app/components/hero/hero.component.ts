import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

import { Navigation } from '../../global/navigation.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, LottieComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  lottieOptions: AnimationOptions = {
    path: 'scroll-down.json',
  };
  heroLottieOptions: AnimationOptions = {
    path: 'hero.json',
  };

  @Input()
  subtitle = '';

  @Input()
  mainTitle = '';

  @Input()
  breadcrumbs: string[] = [];

  @Input()
  buttonText = 'Hai să ne cunoaștem!';

  @Input()
  buttonLink = Navigation.contact.href;
}
