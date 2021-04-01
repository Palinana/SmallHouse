//difine types
interface Listing {
    id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
}

export const listings: Listing[] = [
    {
        id: "5d378db94e84753160e08b30",
        title: "Clean and fully furnished apartment. 5 min away from CN Tower",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
        address: "3210 Scotchmere Dr W, Toronto, ON, CA",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
    },
    {
        id: "5d378db94e84753160e08b31",
        title: "Cozy, clean, and affordable studio in midtown",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641351/mock/Toronto/toronto-listing-2_aeg1rw.jpg",
        address: "7009 Strawberry Street, Toronto, ON, CA",
        price: 15806,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
    },
    {
        id: "5d378db94e84753160e08b32",
        title: "Bright comfortable room within a 4 bedroom duplex",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-3_eyftou.jpg",
        address: "8110 Rockaway Ave, Toronto, ON, CA",
        price: 4055,
        numOfGuests: 3,
        numOfBeds: 2,
        numOfBaths: 2,
        rating: 3
    }
]