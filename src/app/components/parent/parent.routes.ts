import {Routes} from "@ngrx/router";
import {DetailChild} from "./child2/detailChild";

export const parentRoutes:Routes = [
  {
    path: 'child1',
    loadComponent: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve((require('./child1/child1') as any).Child1);
      })
    })
  },
  {
    path: 'child2',
    loadComponent: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve((require('./child2/child2') as any).Child2);
      })
    }),
    children: [
      {path: ':id', component: DetailChild}
    ]
  }
];
