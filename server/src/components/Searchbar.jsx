import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
function Searchbar({ className }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/search?q=${value}`
        );
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div
      className={`relative justify-center items-center flex flex-col bg-[#2C2C2C] rounded-4xl rounded-b-3xl ${className}`.trim()}
    >
      <input
        type="text"
        placeholder="Search by City or PIN..."
        value={query}
        onChange={handleSearch}
        className="w-full h-full px-9 border-3 shadow-sm rounded-3xl sm:rounded-3xl border-[#2C2C2C] border-b-8 focus:outline-none bg-white "
      />
      <ul>
        {results.map((item) => (
          <li
            key={item._id}
            className="bg-[#C7C7C7] border border-gray-300 my-1 hover:bg-[#EBEBEB] group relative"
          >
            <Link
              to={`/buy/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex flex-col px-4 py-2 relative">
                <p>
                  Type: {item.type}, Price: ₹{item.price}
                </p>
                <p>
                  Location: {item.city}, PIN: {item.pin}
                </p>

                {/* Icon in top-right corner on hover */}
                <IoOpenOutline className="absolute text-2xl top-2 right-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="text-center text-white font-sans  text-sm ">
        200+ Properties listed
      </h1>
    </div>
  );
}
export default Searchbar;
