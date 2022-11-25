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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [

      ],
      declarations: [

      ]
    })
      .overrideComponent(FlightSearchComponent, {
        set: {
          providers: [

          ]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should load flights w/ from and to', () => {

      expect();
  });
});
