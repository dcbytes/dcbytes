import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './global/navbar/navbar.component';
import { DrawerComponent } from './global/drawer/drawer.component';
import { LoadingComponent } from './global/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, DrawerComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
