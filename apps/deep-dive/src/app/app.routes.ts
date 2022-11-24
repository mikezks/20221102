// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
          myName: 'Michael'
        }
    },
    {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.module')
          .then(esm => esm.FlightBookingModule),
        data: {
          preloading: true
        }
  },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
