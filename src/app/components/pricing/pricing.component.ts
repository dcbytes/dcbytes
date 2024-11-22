import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { Navigation } from '../../global/navigation.constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, LabelComponent, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  navigation = Navigation;
}
