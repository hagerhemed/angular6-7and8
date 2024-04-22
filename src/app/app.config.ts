import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {counterReducer} from './store/counter/counter.reducer'

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor.service';
import { provideStore } from '@ngrx/store';
import { languageReducer } from './store/language/language.reducer';
import { provideEffects } from '@ngrx/effects';
import { LanguageEffect } from './store/language/language.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideStore({
        counter: counterReducer,
        language: languageReducer
    }), provideEffects(LanguageEffect)]
};
