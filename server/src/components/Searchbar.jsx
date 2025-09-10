import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  IoOpenOutline,
  IoLocationOutline,
  IoHomeOutline,
} from "react-icons/io5";

function Searchbar({ className }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/search?q=${value}`
        );
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setResults([]);
      setIsLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className={`relative justify-center items-center flex flex-col bg-[#2C2C2C] rounded-4xl rounded-b-3xl ${className}`.trim()}
    >
      <input
        style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "600" }}
        type="text"
        placeholder="Search by City or PIN..."
        value={query}
        onChange={handleSearch}
        className="w-full h-full px-9 border-3 shadow-sm rounded-3xl sm:rounded-3xl border-[#2C2C2C] border-b-8 focus:outline-none bg-white transition-all duration-200 focus:shadow-lg"
      />

      {/* Enhanced Results Container */}
      {query.trim() !== "" && (results.length > 0 || isLoading) && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2C2C2C]"></div>
                <span className="ml-3 text-gray-600 font-medium">
                  Searching...
                </span>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {results.map((item, index) => (
                  <li
                    key={item._id}
                    className="transform transition-all duration-200 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "slideInUp 0.3s ease-out forwards",
                    }}
                  >
                    <Link
                      to={`/buy/${item._id}`}
                      className="block p-4 hover:no-underline group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 space-y-2">
                          {/* Property Type and Price Row */}
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <IoHomeOutline className="text-lg text-blue-600" />
                              <span className="font-semibold text-gray-800 text-sm">
                                {item.type}
                              </span>
                            </div>
                            <div className="bg-green-100 px-3 py-1 rounded-full">
                              <span className="text-green-800 font-bold text-sm">
                                {formatPrice(item.price)}
                              </span>
                            </div>
                          </div>

                          {/* Location Row */}
                          <div className="flex items-center space-x-2">
                            <IoLocationOutline className="text-lg text-gray-500" />
                            <span className="text-gray-600 text-sm">
                              <span className="font-medium">{item.city}</span>
                              <span className="mx-2">•</span>
                              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                                PIN: {item.pin}
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <div className="ml-4">
                          <IoOpenOutline className="text-2xl text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}

                {/* Results Footer */}
                <li className="bg-gray-50 px-4 py-3">
                  <div className="text-center text-sm text-gray-600">
                    <span className="font-medium">{results.length}</span>{" "}
                    properties found
                    {results.length >= 10 && (
                      <span className="block text-xs text-gray-500 mt-1">
                        Showing top {results.length} results
                      </span>
                    )}
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {query.trim() !== "" && !isLoading && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 text-center">
            <div className="text-gray-400 mb-2">
              <IoLocationOutline className="text-4xl mx-auto" />
            </div>
            <p className="text-gray-600 font-medium">No properties found</p>
            <p className="text-gray-500 text-sm mt-1">
              Try searching with a different city or PIN code
            </p>
          </div>
        </div>
      )}

      <h1
        className="text-center text-white text-sm mb-1"
        style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "600" }}
      >
        200+ Properties listed
      </h1>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Searchbar;
