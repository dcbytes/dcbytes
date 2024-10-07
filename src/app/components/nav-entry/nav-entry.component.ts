import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-entry',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-entry.component.html',
  styleUrl: './nav-entry.component.scss',
})
export class NavEntryComponent {
  @Input()
  href?: string;

  @Input()
  mainTitle?: string;

}
