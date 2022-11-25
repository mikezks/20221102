import { createSelector } from "@ngrx/store";

export const selectFlightSearchViewModel = createSelector(
  // Selectors
  selectFlights,      // <-- through Boarding Domain API
  selectPassengers,   // <-- own Domain Selector
  // Projector
  (flights, passenger) => {
    return viewModel;
  }
);
