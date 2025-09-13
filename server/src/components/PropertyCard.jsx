import { Link } from "react-router-dom";
import { Home, Bed, Bath, Car } from "lucide-react";

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatArea = (area) => {
    return new Intl.NumberFormat("en-IN").format(area);
  };

  const pricePerSqFt = Math.round(property.price / property.area);

  return (
    <Link to={`/buy/${property._id}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative w-full md:w-64 h-48 md:h-40 flex-shrink-0  ">
          <img
            src={property.photos[0]}
            alt={property.title}
            className="w-full h-full object-cover rounded-2xl p-2"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1">
          <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
            <div>
              {/* Title and Location */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 capitalize">
                  {property.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {property.city}
                </p>
              </div>

              {/* Property Details */}
              <div className="flex items-center gap-4 md:gap-6 text-gray-600 text-sm md:text-base">
                <div className="flex items-center gap-1 md:gap-2">
                  <Home size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="font-medium">
                    {formatArea(property.area)}ft²
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Bed size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Bath size={16} className="md:w-[18px] md:h-[18px]" />
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
                {property.parking_spaces === "true" && (
                  <div className="flex items-center gap-1 md:gap-2">
                    <Car size={16} className="md:w-[18px] md:h-[18px]" />
                    <span className="font-medium">1</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="text-left md:text-right">
              <div className="text-xl md:text-3xl font-bold text-gray-900">
                {formatPrice(property.price)}
              </div>
              <div className="text-gray-500 text-sm md:text-base mt-1">
                ₹{new Intl.NumberFormat("en-IN").format(pricePerSqFt)} / ft²
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
