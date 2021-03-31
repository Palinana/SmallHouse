//difine types
interface Listing {
    id: string;
    title: string;
    description: string;
    image: string;
    host: string;
    address: string;
    country: string;
    admin: string;
    city: string;
    price: number;
    numOfGuests: number;
}

export const listings: Listing[] = [
    {
        id: "5d378db94e84753160e08b30",
        title: "Clean and fully furnished apartment. 5 min away from CN Tower",
        description:
            "2 bed, 2 bathroom cozy apartment in the heart of downtown Toronto and only 5 min away from the CN Tower, Scotiabank Arena, and Rogers Center.",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
        host: "5d378db94e84753160e08b57",
        address: "3210 Scotchmere Dr W, Toronto, ON, CA",
        country: "Canada",
        admin: "Ontario",
        city: "Toronto",
        price: 12424,
        numOfGuests: 3,
    },
    {
        id: "5d378db94e84753160e08b31",
        title: "Cozy, clean, and affordable studio in midtown",
        description:
            "Cozy, clean, and affordable studio located around midtown. Perfect for a solo traveller on a budget.",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641351/mock/Toronto/toronto-listing-2_aeg1rw.jpg",
        host: "5d378db94e84753160e08b55",
        address: "7009 Strawberry Street, Toronto, ON, CA",
        country: "Canada",
        admin: "Ontario",
        city: "Toronto",
        price: 15806,
        numOfGuests: 3,
    },
    {
        id: "5d378db94e84753160e08b32",
        title: "Bright comfortable room within a 4 bedroom duplex",
        description:
            "Bright comfortable room within a 4 bedroom duplex. 10 min drive from local airport. Relax, re-charge your batteries, and enjoy the suburbs of the Greater Toronto Area in this comfortable setting.",
        image:
            "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-3_eyftou.jpg",
        host: "5d378db94e84753160e08b57",
        address: "8110 Rockaway Ave, Toronto, ON, CA",
        country: "Canada",
        admin: "Ontario",
        city: "Toronto",
        price: 4055,
        numOfGuests: 2,
    }
]