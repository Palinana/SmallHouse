import { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList,
    GraphQLInt, 
    GraphQLID, 
    GraphQLSchema,
    GraphQLNonNull
} from 'graphql';

import { listings } from '../listings';

const Listing = new GraphQLObjectType ({
    name: 'Listing',
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        host: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
        admin: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLInt) },
        numOfGuests: { type: GraphQLNonNull(GraphQLInt) }
    }
});

// returns all the listings
const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        listings: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))), // never what it to be null
            resolve: () => {
                return listings;
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        deleteListing: {
            type: GraphQLNonNull(Listing),
            args: {
                id: { type: GraphQLNonNull(GraphQLID) } // return id of deleted item
            },
            resolve: (_root, { id }) => {
                for(let i=0;i<listings.length;i++) {
                    if(listings[i].id === id) {
                        return listings.splice(i, 1)[0]; // returns the item
                    }
                }
                throw new Error('failed to delete the listing')
            }
        }
    }
});

export const schema = new GraphQLSchema({ query, mutation });
