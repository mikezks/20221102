// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingComponent } from './flight-booking.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
  imports: [
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
    FlightEditComponent
  ],
  providers: [
    /* {
      provide: FlightService,
      useFactory: (http: HttpClient) => {
        if (environment.dummyFlightService) {
          return new DummyFlightService();
        } else {
          return new DefaultFlightService(http);
        }
      },
      deps: [HttpClient]
    } */
    /* { provide: FlightService, useClass: DefaultFlightService, multi: true },
    { provide: FlightService, useClass: DummyFlightService, multi: true } */
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
