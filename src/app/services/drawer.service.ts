import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawerStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public readonly drawerState: Observable<boolean> =
    this.drawerStateSubject.asObservable();

  constructor() {}

  openDrawer(): void {
    this.drawerStateSubject.next(true);
  }

  closeDrawer(): void {
    this.drawerStateSubject.next(false);
  }

  toggleDrawer(): void {
    this.drawerStateSubject.next(!this.drawerStateSubject.getValue());
  }
}
