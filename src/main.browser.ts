import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter, Routes} from '@ngrx/router';
import {provideStore} from '@ngrx/store';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {stackReducer} from './app/reducers/stackReducer';
import {App} from './app/app';
import {Stack} from "app/components/stack/stack";

const routes:Routes = [
  {
    path: '/parent',
    loadComponent: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve((require('./app/components/parent/parent') as any).Parent);
      })
    }),
    loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve((require('./app/components/parent/parent.routes') as any).parentRoutes);
      })
    })
  },
  {
    path: '/stack', component: Stack
  }
];

bootstrap(App, [
  HTTP_PROVIDERS,
  provideRouter(routes),
  provideStore({stack: stackReducer}),
  disableDeprecatedForms(),
  provideForms()
])
  .catch(err => console.error(err));
