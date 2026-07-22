import { createSelector } from "@reduxjs/toolkit";

const selectAllCampers = (state) => state.campers.items;
const selectFilters = (state) => state.filters;

export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;
export const selectFavoriteIds = (state) => state.favorites.ids;
export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectFilters],
  (campers, filters) => {
    const location = filters.location.trim().toLowerCase();

    return campers.filter((camper) => {
      if (location && !camper.location?.toLowerCase().includes(location)) {
        return false;
      }
      if (filters.form && camper.form !== filters.form) {
        return false;
      }
      if (filters.engine && camper.engine !== filters.engine) {
        return false;
      }
      if (
        filters.transmission &&
        camper.transmission !== filters.transmission
      ) {
        return false;
      }
      return true;
    });
  }
);

export const selectVisibleCampers = createSelector(
  [selectFilteredCampers, (state) => state.filters.visibleCount],
  (filtered, visibleCount) => filtered.slice(0, visibleCount)
);

export const selectHasMoreCampers = createSelector(
  [selectFilteredCampers, (state) => state.filters.visibleCount],
  (filtered, visibleCount) => visibleCount < filtered.length
);
