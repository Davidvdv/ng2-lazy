import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter, Routes} from '@ngrx/router';
import {provideStore} from '@ngrx/store';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {stackReducer} from './app/reducers/stackReducer';
import {App} from './app/app';

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
    path: '/stack',
    loadComponents: {
      main: () => new Promise(resolve => {
        require.ensure([], require => {
          resolve((require('./app/components/stack/stack') as any).Stack);
        })
      }),
      sideBlock: () => new Promise(resolve => {
        require.ensure([], require => {
          resolve((require('./app/components/stack/sideBlock') as any).SideBlock);
        })
      })
    }
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
