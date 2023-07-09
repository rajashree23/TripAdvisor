import { useParams } from "react-router-dom";
// import { useTripContext } from "../../context/TripContext";

export const DestinationDetail = ({ continent }) => {
  const { destinationName } = useParams();
//   const places = useTripContext();
//   const findDestination = places?.continents.find((continent) =>
//     continent.countries.find((country) =>
//       country.destinations.find(({ name }) => name === destinationName)
//     )
//   );

  console.log(destinationName);
  return (
    <div className="homepage">
        <h2 className="continent-heading">{destinationName}</h2>
    <div>
      <div>
        <img alt="img" />
      </div>
      <div>
       <p>Description:</p>
       <p>Ratings</p>
       <p>Reviews</p>
       <p>Location</p>
       <p>Opening Hours</p>
       <p>Ticket Price</p>
       <a href="www.google.com" target="_blank"  rel="noreferrer">Website</a>
      </div>
    </div>
    </div>
  );
};
