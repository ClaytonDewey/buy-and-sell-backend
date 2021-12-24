import { getAllListingsRoute } from './getAllListings';
import { createNewListingRoute } from './createNewListing';
import { deleteListingRoute } from './deleteListing';
import { getListingRoute } from './getListing';
import { addViewToListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';
import { updateListingRoute } from './updateListing';

export default [
  addViewToListingRoute,
  createNewListingRoute,
  deleteListingRoute,
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute,
  updateListingRoute
];