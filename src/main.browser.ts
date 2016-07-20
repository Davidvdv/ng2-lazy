import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter, Routes} from '@ngrx/router';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {UIToolkit} from './app/UIToolkit';

const routes:Routes = [
    {
        path: '/demo',
        loadComponent: () => new Promise(resolve => {
            require.ensure([], require => {
                resolve((require('./app/Demo') as any).Demo);
            })
        })
    }
];

bootstrap(UIToolkit, [
    HTTP_PROVIDERS,
    provideRouter(routes),
    disableDeprecatedForms(),
    provideForms()
]).catch(err => console.error(err));
