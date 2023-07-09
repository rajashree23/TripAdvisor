import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export const DestinationCard = ({ destination ,countryName }) => {
  return (
    <Link className="continent-card" to={`/${countryName}/${destination.name}`}>
      <div className="image-container">
        <img src={destination.image} alt={destination.name} />
      </div>
      <div className="detail-container">
        <MdLocationOn />
        <p>{destination.name}</p>
      </div>
    </Link>
  );
};
