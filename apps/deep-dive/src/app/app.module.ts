// src/app/app.module.ts

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { tap } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { Config, ConfigService } from './config.service';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

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
