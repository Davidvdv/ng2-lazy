import {bootstrap} from '@angular/platform-browser-dynamic';
// import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@ngrx/router';
import {App} from './app/app';
import {Routes} from "@ngrx/router";

// enableProdMode()

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
  }
];

bootstrap(App, [
  HTTP_PROVIDERS,
  provideRouter(routes)
])
  .catch(err => console.error(err));
