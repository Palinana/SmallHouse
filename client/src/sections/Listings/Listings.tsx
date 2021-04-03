import React from "react";
import { server } from '../../lib/api';
import { ListingsData, DeleteListingData, DeleteListingVariables } from './types';

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
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log('listings: ', data);
  };

  const deleteListings = async () => {
    const { data } = await server.fetch<DeleteListingData, DeleteListingVariables>({ 
      query: DELETELISTINGS,
      variables: {
        id: '6066306116737a1d9fea630c'
      } 
    });
    console.log('deleteListings: ', data);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>

      <button onClick={deleteListings}>Delete Listing</button>
    </div>
  )
};
