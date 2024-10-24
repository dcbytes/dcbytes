import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-promo-description',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './promo-description.component.html',
  styleUrl: './promo-description.component.scss',
})
export class PromoDescriptionComponent implements OnChanges {
  lottieOptions?: AnimationOptions;

  @Input()
  promoTitle: string;

  @Input()
  promoDescription: string;

  @Input()
  buttonText: string;

  @Input()
  buttonLink: string;

  @Input()
  promoImage: string;

  @Input()
  promoLottie: string;

  ngOnChanges(changes: SimpleChanges): void {
    // when promoLottie changes, update the lottieOptions
    if (changes['promoLottie']) {
      this.lottieOptions = {
        path: this.promoLottie,
      };
    }
  }
}
