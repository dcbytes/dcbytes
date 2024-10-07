import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavEntryComponent } from '../../components/nav-entry/nav-entry.component';
import { Navigation } from '../navigation.constants';
import { AsyncPipe } from '@angular/common';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NavEntryComponent, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navigation = Navigation;
  drawerOpened$ = this.drawerService.drawerState;

  constructor(private readonly drawerService: DrawerService) {}

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
