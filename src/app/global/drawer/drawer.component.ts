import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavEntryComponent } from '../../components/nav-entry/nav-entry.component';
import { DrawerService } from '../../services/drawer.service';
import { Navigation } from '../navigation.constants';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule, NavEntryComponent, AsyncPipe],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  animations: [
    trigger('sliderState', [
      state('open', style({ width: '100%' })),
      state('closed', style({ width: '0' })),

      transition('closed => open', animate('200ms ease-out')),
      transition('open => closed', animate('300ms ease-out')),
    ]),
  ],
})
export class DrawerComponent {
  navigation = Navigation;
  drawerOpened$ = this.drawerService.drawerState;

  constructor(private readonly drawerService: DrawerService) {}
}
