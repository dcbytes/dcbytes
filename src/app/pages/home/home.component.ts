import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './sections/services/services.component';
import { HeroDescriptionComponent } from '../../components/hero-description/hero-description.component';
import { ServiceDisplayerComponent } from "../../components/service-displayer/service-displayer.component";
import { PromoDescriptionComponent } from "../../components/promo-description/promo-description.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    HeroDescriptionComponent,
    ServiceDisplayerComponent,
    PromoDescriptionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
