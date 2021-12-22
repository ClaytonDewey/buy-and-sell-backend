import { getAllListingsRoute } from './getAllListings';
import { createNewListingRoute } from './createNewListing';
import { getListingRoute } from './getListing';
import { addViewToListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';

export default [
  addViewToListingRoute,
  createNewListingRoute,
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute
];