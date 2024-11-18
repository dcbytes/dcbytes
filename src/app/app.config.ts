import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { baseUrlInterceptor } from './shared/interceptors/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([baseUrlInterceptor]), withFetch()),
    provideToastr(),
    provideClientHydration(),
    provideLottieOptions({
      player: () => player,
    }),
    importProvidersFrom(NgxPageScrollCoreModule.forRoot()),
  ],
};
