import { Link } from "react-router-dom";
const PropertyCard = ({ property }) => {
  return (
    <Link to={`/buy/${property._id}`}>
      <div className="border rounded shadow hover:shadow-lg">
        <img
          src={property.photos[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="text-sm text-gray-600">{property.city}</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
