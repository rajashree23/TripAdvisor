import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export const CountryCard = ({ country }) => {
  return (
    <Link className="continent-card" to={`/country/${country.name}`} >
      <div className="image-container">
        <img src={country.image} alt={country.name} />
      </div>
      <div className="detail-container">
        <MdLocationOn />
        <p>{country.name}</p>
      </div>
    </Link>
  );
};
