import { useParams } from "react-router-dom";

import { DestinationCard } from "./component/DestinationCard";
import { useTripContext } from "../../context/TripContext";

export const Destination = () => {
  const { countryName } = useParams();
  const { places } = useTripContext();
  const findContinent = places.continents.find((continent) =>
    continent.countries.find(({ name }) => name === countryName)
  );
  const findCountry=findContinent.countries.find(({name})=>name===countryName)

  return (
    findCountry && (
      <div className="homepage">
        <div className="heading">
          <h2 className="continent-heading">
            Top countries in {countryName} for you next holiday
          </h2>
        </div>
        <div className="continent-container">
          {findCountry.destinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.id} countryName={countryName} />
          ))}
        </div>
      </div>
    )
  );
};
