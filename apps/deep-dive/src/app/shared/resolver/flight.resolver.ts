import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Flight } from '../../flight-booking/flight';
import { FlightService } from '../../flight-booking/flight.service';

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<Flight> {

  constructor(private flightService: FlightService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Flight> {
    const idStr = route.paramMap.get('id');
    const id = !idStr ? 0 : +idStr;
    return this.flightService.findById(id)
  }
}
