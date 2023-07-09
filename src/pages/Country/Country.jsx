import { useParams } from "react-router-dom";
import { useTripContext } from "../../context/TripContext";
import { CountryCard } from "./component/CountryCard";


export const Country = () => {
  const { continentName } = useParams();
  const { places } = useTripContext();
  const findContinent = places.continents.find(
    ({ name }) => name === continentName
  );
 
  return (
    findContinent &&
    <div className="homepage">
      <div className="heading">
        <h2 className="continent-heading">Top countries in {continentName} for you next holiday</h2>
      </div>
      <div className="continent-container">
        {findContinent.countries.map((country) => (
          <CountryCard country={country} key={country.id} />
        ))}
      </div>
    </div>
  );
};
