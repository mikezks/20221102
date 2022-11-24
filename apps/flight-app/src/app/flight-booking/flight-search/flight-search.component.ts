import {Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';
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

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  search(filter: FlightFilter): void {
    this.filter = filter;

    if (!this.filter.from || !this.filter.to) return;

    this.flightService
      .load(this.filter.from, this.filter.to, this.filter.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }

}
