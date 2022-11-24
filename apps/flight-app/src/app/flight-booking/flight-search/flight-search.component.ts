import {Component, OnInit} from '@angular/core';
import {Flight} from '@flight-workspace/flight-lib';
import { Store } from '@ngrx/store';
import * as fromFlightBooking from '../+state';
import { FlightFilter } from '../entities/flight-filter';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  filter = {
    from: 'Hamburg',
    to: 'Graz',
    urgent: false
  };
  flights$ = this.store.select(fromFlightBooking.selectFlights);

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private store: Store) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  search(filter: FlightFilter): void {
    this.filter = filter;

    if (!this.filter.from || !this.filter.to) return;

    this.store.dispatch(
      fromFlightBooking.flightsLoad({
        from: this.filter.from,
        to: this.filter.to,
        urgent: this.filter.urgent
      })
    );
  }

  delay(flight: Flight): void {
    this.store.dispatch(
      fromFlightBooking.flightUpdate({
        flight: {
          ...flight,
          date: addMinutesToDate(flight.date, 15).toISOString(),
          delayed: true
        }
      })
    );
  }

}

export const addMinutesToDate = (date: Date | string, minutes: number): Date => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Date(dateObj.getTime() + minutes * 60 * 1_000);
};
