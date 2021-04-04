import React from "react";
import { server, useQuery } from '../../lib/api';
import { 
  Listing, 
  ListingsData, 
  DeleteListingData, 
  DeleteListingVariables 
} from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      numOfBaths 
      rating
    }
  }
`;

const DELETELISTINGS = `
  mutation DeleteListing($id: ID!) { 
    deleteListing(id: $id) { 
      id
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title } : Props) => {
  const { data, refetch } = useQuery<ListingsData>(LISTINGS); // custom Hook to fetch listings

  const deleteListings = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({ 
      query: DELETELISTINGS,
      variables: {
        id
      } 
    });
    
    refetch();
  };

  const listings = data ? data.listings : null;

  const listingsList = listings 
  ? <ul>
      {listings.map((listing) => {
        return <li key={listing.id}>
          {listing.title}
          <button onClick={() => deleteListings(listing.id)}>Delete </button>
        </li>
      })}
    </ul>
  : null;

  return (
    <div>
      <h2>{title}</h2>
      {listingsList}
    </div>
  )
};
