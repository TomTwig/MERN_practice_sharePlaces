import React from "react";
import PlaceList from "../components/PlaceList";



export default function UserPlaces() {

    const DUMMY_PLACES = [

        {
            id: "p1",
            title: "Empire State Building",
            description: "One of the most famous sky scapers in the world",
            imageUrl:"https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            address:"20 W 34th St., New York, NY 10001",
            location: {
                lat: 40.7484405,
                lng: -73.9878531

            },
            creator: "u1"
        },

        {
            id: "p2",
            title: "Empire State Building",
            description: "One of the most famous sky scapers in the world",
            imageUrl:"https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            address:"20 W 34th St., New York, NY 10001",
            location: {
                lat: 40.7484405,
                lng: -73.9878531

            },
            creator: "u2"
        }
    ]

    
  return <PlaceList items={DUMMY_PLACES} />;
}


// {props.items.map((place)=> <PlaceItem key={place.id}
// id={place.id}
// image={place.imageUrl}
// tittle={place.title}
// description={place.description}
// address={place.address}
// creatorId={place.creator}
// coordinates={place.location} />)}