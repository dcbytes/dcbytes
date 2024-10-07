import { Routes } from '@angular/router';
import { Navigation } from './global/navigation.constants';
import { HomeComponent } from './pages/home/home.component';

const noSlash = (path: string) => path.replace(/^\//, '');

export const routes: Routes = [
  {
    path: noSlash(Navigation.home.href),
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'acasa',
    pathMatch: 'full',
  },
];
