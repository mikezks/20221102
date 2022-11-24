import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {

  flights: Flight[] = [
    {
      id: 999,
      from: 'London',
      to: 'Madrid',
      date: new Date().toISOString(),
      delayed: false
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  load(): void {
  }

  find(): Observable<Flight[]> {
    return of(this.flights);
  }

  findById(): Observable<Flight> {
    return of(this.flights[0]);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  delay(): void {
  }
}
