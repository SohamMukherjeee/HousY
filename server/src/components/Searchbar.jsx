import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className={`relative ${className}`.trim()}>
      <input
        type="text"
        placeholder="Search by City or PIN..."
        value={query}
        onChange={handleSearch}
        className="w-full h-full px-4 border rounded-md shadow-sm"
      />
      <ul>
        {results.map((item) => (
          <li
            key={item._id}
            className="bg-[#C7C7C7] border-0.5 my-1  hover:bg-[#EBEBEB]"
          >
            <Link
              to={`/buy/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>
                Type: {item.type}, Price: ₹{item.price}
              </p>
              <p>
                Location: {item.city}, PIN: {item.pin}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Searchbar;
