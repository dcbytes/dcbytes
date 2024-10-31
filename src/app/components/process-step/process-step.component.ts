import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-step.component.html',
  styleUrl: './process-step.component.scss',
})
export class ProcessStepComponent {
  openState: 'open' | 'closed' = 'closed';

  @Input()
  step: string;

  @Input()
  stepTitle: string;

  @Input()
  stepDescription: string;

  handleToggle() {
    this.openState = this.openState === 'open' ? 'closed' : 'open';
  }
}
