import { Injectable, OnDestroy } from "@angular/core";
import { Subject, Observable, Subscription, takeUntil, filter } from "rxjs";

@Injectable()
export class ObserverComponent implements OnDestroy {
  public unsubscribe$ = new Subject<void>();

  /**
   * Subscribes to an observable and automatically unsubscribes when the component is destroyed.
   *
   * @param observable$ - The observable to subscribe to. Can be a Subject or an Observable.
   * @param subscribeCallback - The function to call when a new value is emitted.
   * @param errorCallback - Optional. The function to call when an error occurs.
   *
   * @returns A Subscription object which can be used to unsubscribe manually.
   */
  protected subscribeTo<T, E>(
    observable$: Subject<T> | Observable<T>,
    subscribeCallback: (result: T) => void,
    errorCallback?: (error: E) => void,
  ): Subscription {
    return observable$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: subscribeCallback,
      error: errorCallback,
    });
  }

  protected subscribeToDefined<T, E>(
    observable$: Subject<T> | Observable<T>,
    subscribeCallback: (result: T) => void,
    errorCallback?: (error: E) => void,
  ): Subscription {
    return observable$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((value) => value !== null && value !== undefined),
      )
      .subscribe({
        next: subscribeCallback,
        error: errorCallback,
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

