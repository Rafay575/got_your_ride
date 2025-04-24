import React from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";
import placesData from "../data/index.jsx"; 

const Main = () => {
  const { placeId } = useParams();
  const selectedPlace = placesData.find(
    (place) => Number(place.id) === Number(placeId)
  );
  console.log(selectedPlace.itineraryData)
  return (
    <div>
      {selectedPlace ? (
        <Booking
          bookingData={selectedPlace.bookingData}
          tripData={selectedPlace.tripData}
          itineraryData={selectedPlace.itineraryData}
          options={selectedPlace.options}
          place={selectedPlace.id}
        />
      ) : (
        <p>Place not found.</p>
      )}
    </div>
  );
};

export default Main;
