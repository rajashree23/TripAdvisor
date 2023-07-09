import { useTripContext } from "../../context/TripContext";
import { Continent } from "./component/Continents";


export const Homepage = () => {
  const { places } = useTripContext();
  return (
    <div className="homepage">
      <div className="heading">
        <h1> Welcome to Trip Advisor</h1>
        <h2>Top continents for you next holiday</h2>
      </div>
      <div className="continent-container">
        {places.continents.map((continent) => (
          <Continent continent={continent} key={continent.id} />
        ))}
      </div>
    </div>
  );
};
