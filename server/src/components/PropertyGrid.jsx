import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/prop`)
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};
export default PropertyGrid;
