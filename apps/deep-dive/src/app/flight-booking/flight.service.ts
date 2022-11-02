// src/app/default-flight.service.ts

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BASE_URL } from '../app.token';
import { ConfigService } from '../config.service';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root',
  useFactory: (baseUrl: string, http: HttpClient, cfgService: ConfigService) => {
    if (cfgService.config.value.useDummy) {
      return new DummyFlightService();
    } else {
      return new DefaultFlightService(baseUrl, http);
    }
  },
  deps: [
    [new Inject(BASE_URL)],
    HttpClient,
    ConfigService
  ]
})
export abstract class FlightService {

  // We will refactor this to an observable in a later exercise!
  flights: Flight[] = [];

  abstract load(from: string, to: string): void;
  abstract find(from: string, to: string): Observable<Flight[]>;
  abstract delay(): void;
}
