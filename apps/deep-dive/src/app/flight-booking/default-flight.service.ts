import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app.token';
import { Flight } from './flight';

@Injectable()
export class DefaultFlightService {

  flights: Flight[] = [];

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) { }

  load(from: string, to: string): void {
    this.find(from, to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('error', err);
      }
    });
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + 'flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }

  delay(): void {
    const date = new Date(this.flights[0].date);
    date.setTime(date.getTime() + 1000 * 60 * 15);
    this.flights[0].date = date.toISOString();
  }
}