// src/app/flight-card/flight-card.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, ElementRef, NgZone } from '@angular/core';
import { Flight } from '../flight';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private element: ElementRef, private zone: NgZone) {
    console.log('ctor', this.item);
  }

  ngOnInit() {
    console.log('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.item);

    if (changes['item']) {
    console.log('ngOnChanges: item');
    }
    if (changes['selected']) {
    console.log('ngOnChanges: selected');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        //              ^----- DOM-Element
      });

      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = this.selected ? 'rgb(204, 197, 185)' : 'white';
      }, 1000);
    });

    return null;
  }
}
