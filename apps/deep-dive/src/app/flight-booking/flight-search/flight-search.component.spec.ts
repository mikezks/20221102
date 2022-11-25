import { Component, Directive, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { FlightSearchComponent } from './flight-search.component';


describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  const result = [
    { id: 17, from: 'Graz', to: 'Hamburg', date: 'now', delayed: true },
    { id: 18, from: 'Vienna', to: 'Barcelona', date: 'now', delayed: true },
    { id: 19, from: 'Frankfurt', to: 'Salzburg', date: 'now', delayed: true },
  ];

  const flightServiceMock = {
    find(): Observable<Flight[]> {
      return of(result);
    },
    // Implement the following members only if this code is used in your Component
    flights: [],
    load(): void {
      this.find().subscribe(f => { (this.flights as Flight[]) = f; });
    }
  };

  // eslint-disable-next-line @angular-eslint/component-selector
  @Component({ selector: 'flight-card', template: '' })
  class FlightCardComponent {
    @Input() item: Flight | undefined;
    @Input() selected = false;
    @Output() selectedChange = new EventEmitter<boolean>();
  }

  // eslint-disable-next-line @angular-eslint/directive-selector
  @Directive({ selector: 'input[city]' })
  class CityValidatorDirective {
    @Input() city: string[] = [];
    validate = () => null;
  }

  @Pipe({ name: 'city' })
  class CityPipe implements PipeTransform {
    transform = (v: unknown) => v;
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        CityPipe,
        CityValidatorDirective
      ]
    })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [
            {
              provide: FlightService,
              useValue: flightServiceMock
            }
          ]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load flights w/ from and to', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();

    expect(component.flights.length).toBeGreaterThan(0);
  });
});
