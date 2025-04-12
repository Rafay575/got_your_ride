import React from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";
import placesData from "../data/index.js"; // your data module

const Main = () => {
  // Extract the placeId parameter from the URL
  const { placeId } = useParams();
  // Convert placeId to number if needed:
  const selectedPlace = placesData.find(
    (place) => Number(place.id) === Number(placeId)
  );

  return (
    <div>
      {selectedPlace ? (
        <Booking
          bookingData={selectedPlace.bookingData}
          tripData={selectedPlace.tripData}
          itineraryData={selectedPlace.itineraryData}
        />
      ) : (
        <p>Place not found.</p>
      )}
    </div>
  );
};

export default Main;
