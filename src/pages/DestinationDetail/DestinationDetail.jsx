import { useParams } from "react-router-dom";
import { useTripContext } from "../../context/TripContext";

export const DestinationDetail = ({ continent }) => {
  const { destinationName } = useParams();
  const {places} = useTripContext();
  const findDestination = places.continents.find((continent) =>
    continent.countries.find((country) =>
      country.destinations.find(({ name }) => name === destinationName)
    )
  );

const a=findDestination.countries.find((country)=>country.destinations.find((d)=>d.name===destinationName));
const b=a.destinations.find((r)=>r.name===destinationName);
console.log(b)
  return (
    <div className="homepage">
        <h2 style={{color:"white"}}>{destinationName}</h2>
    <div className="description">
      <div>
        <img alt="img" src={b.image} className="image-container"/>
      </div>
      <div>
       <p>Description: {b.description}</p>
       <p>Ratings: {b.ratings}</p>
       <p>Reviews: {b.reviews}</p>
       <p>Location: {b.location}</p>
       <p>Opening Hours: {b.openingHours}</p>
       <p>Ticket Price: {b.ticketPrice}</p>
       <a href={b.website} target="_blank"  rel="noreferrer">Website</a>
      </div>
    </div>
    </div>
  );
};
