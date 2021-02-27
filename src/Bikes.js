import { useState, useEffect } from "react";
import createEnturService from "@entur/sdk";
import Station from "./Station";

const service = createEnturService({
  clientName: "therese-infoscreen",
});

export default function Bikes() {
  const [bikeStations, setBikeStations] = useState([]);
  useEffect(() => {
    service
      .getBikeRentalStationsByPosition(
        //   oslo sentral station
        { latitude: 59.911096, longitude: 10.7502687 },
        100
      )
      .then((bikeStations) => setBikeStations(bikeStations));
  }, []);

  return bikeStations.length ? (
    <div className="bikes">
      <h2>Bikes</h2>
      {bikeStations.map((bikeStation) => {
        return (
          <Station
            key={bikeStation.id}
            station={bikeStation.name}
            bikesAvailable={bikeStation.bikesAvailable}
            spacesAvailable={bikeStation.spacesAvailable}
          />
        );
      })}
    </div>
  ) : (
    <div className="bikes">
      <h2>Bikes</h2>
      <h3>Sorry, no bikes nearby</h3>
    </div>
  );
}
