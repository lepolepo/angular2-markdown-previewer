import { RouterConfig } from '@angular/router';

import { HomeComponent } from './index';

export const HomeRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'angular2-markdown-previewer',
    component: HomeComponent
  }
];
