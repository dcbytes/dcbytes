import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './sections/services/services.component';
import { HeroDescriptionComponent } from '../../components/hero-description/hero-description.component';
import { ServiceDisplayerComponent } from "../../components/service-displayer/service-displayer.component";
import { PromoDescriptionComponent } from "../../components/promo-description/promo-description.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { ProcessStepComponent } from "../../components/process-step/process-step.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    HeroDescriptionComponent,
    ServiceDisplayerComponent,
    PromoDescriptionComponent,
    PricingComponent,
    ProcessStepComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
