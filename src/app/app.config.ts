import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { appReducers } from './state/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { loginEffect} from '@states/auth/state/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(appReducers), provideHttpClient(),
  provideEffects([
    { loginEffect },
  ])
  ]
};
