import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CiLocationOn } from "react-icons/ci";
import {
  IoPricetagOutline,
  IoHomeOutline,
  IoStorefrontOutline,
  IoGrid,
  IoBedOutline,
  IoCarOutline,
  IoCalendarClearOutline,
  IoDocumentTextSharp,
  IoOpenOutline,
  IoGolf,
} from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import ScheduleMeetingButton from "./ScheduleMeetingButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/prop/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col p-6 sm:w-1/2  text-black">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Property Details
        </h1>
        <p className="text-xl font-semibold text-gray-600">{property.title}</p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <CiLocationOn className="text-xl" />
          <span className="ml-1">{property.city}</span>
          <p onClick={() => window.open(property.google_map_link)}>
            <IoOpenOutline className="text-l cursor-pointer" />
          </p>
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoPricetagOutline className="text-xl" />
          <span className="ml-1">{property.price} INR</span>
        </p>

        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoHomeOutline className="text-xl" />
          <span className="ml-1">{property.area} sqft</span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoStorefrontOutline className="text-xl" />
          <span className="ml-1">{property.type}</span>
        </p>
        <p className="mt-2 flex flex-row items-center gap-2 text-gray-700 text-base">
          <SlUser className="text-xl" />
          <span className="ml-1">{property.owner_name}</span>
        </p>
        <p className="mt-2 flex flex-row items-center gap-2 text-gray-700 text-base">
          <IoBedOutline className="text-xl" />
          <span className="ml-1">Bedrooms-{property.bedrooms}</span>
          <span className="ml-1">Bathrooms-{property.bathrooms}</span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoCarOutline className="text-xl" />
          <span className="ml-1">
            Parking- {property.parking ? "Yes" : "No"}
          </span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoGrid className="text-xl" />
          <span className="ml-1">{property.furnishing}</span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoCalendarClearOutline className="text-xl" />
          <span className="ml-1">Year Built {property.year_built}</span>
        </p>

        <div className="mt-2 flex items-center">
          <ScheduleMeetingButton property={property} />
        </div>

        <p className="mt-2 flex items-center gap-2 text-gray-700 text-base">
          <IoDocumentTextSharp className="sm:text-3xl" />
          <span className="ml-1 py-10">{property.description}</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col h-screen w-screen sm:w-1/2">
        {/* Photo Section */}
        <div className="h-1/2 w-scrren flex flex-col justify-center items-center ">
          <h1 className="text-gray-700  text-2xl">See the photos</h1>
          <div className="w-full md:w-2/3 lg:w-3/4 mx-auto mt-4">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              className="rounded-xl shadow-lg overflow-hidden"
            >
              {property.photos.map((pic, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center bg-gray-100"
                >
                  <img
                    src={pic}
                    alt={`Property ${index}`}
                    className="h-64 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-2.5">
            <IoGolf />
            <h1 className="text-gray-700 text-xl my-4">Map(Nearby places)</h1>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <iframe
              title="map"
              className="w-3/4 h-3/4 rounded-md"
              src={`https://www.google.com/maps?q=${property.pin}&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
