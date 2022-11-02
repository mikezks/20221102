// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { BasketComponent } from './basket/basket.component';
import { FlightService } from '@flight-workspace/flight-lib';
import { Config, ConfigService } from './config.service';
import { tap } from 'rxjs';

@NgModule({
   imports: [
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
      BrowserModule,
      FlightBookingModule,
      SharedModule,
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent,
      BasketComponent,
   ],
   providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (http: HttpClient, cfgService: ConfigService) => () =>
          http.get<Config>('./assets/runtime/config.json').pipe(
          tap(config => cfgService.config.next(config))
        ),
      deps: [HttpClient, ConfigService],
      multi: true
    }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
