import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-service-displayer',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  templateUrl: './service-displayer.component.html',
  styleUrl: './service-displayer.component.scss',
})
export class ServiceDisplayerComponent {
  @Input()
  labelTitle: string;

  @Input()
  image: string;

  @Input()
  description: string;

  @Input()
  colorClass: 'green' | 'gray' | 'black' = 'green';

  @Input()
  isPresentationWebsite: boolean = false;

  @Input()
  presentationLink: string;

  handlePresentationClick() {
    if (this.isPresentationWebsite) {
      window.open(this.presentationLink, '_blank');
    }
  }
}
