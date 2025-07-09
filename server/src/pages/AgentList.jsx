// pages/AgentList.jsx
import React, { useEffect, useState } from "react";
import AgentRow from "../components/AgentRow";
import AgentRowSkeleton from "../components/AgentRowSkeleton";
import Navbar from "../components/Navbar";
const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedPlace, setSelectedPlace] = useState("");
  const [filteredAgents, setFilteredAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/agents`);
        const data = await res.json();
        setAgents(data);
        setFilteredAgents(data);
      } catch (err) {
        console.error("Failed to fetch agents:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const handleFilter = () => {
    if (!selectedPlace) {
      setFilteredAgents(agents); // show all
    } else {
      const filtered = agents.filter(
        (agent) => agent.place.toLowerCase() === selectedPlace.toLowerCase()
      );
      setFilteredAgents(filtered);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 pt-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Our Agents</h2>

          {/* Filter dropdown */}
          <div className="flex gap-2 items-center">
            <select
              className="border p-2 rounded"
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm"
              onClick={handleFilter}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div
          className={`sm:grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-2 p-3 items-start sm:items-center  border-b text-sm hidden sm:block`}
        >
          <p>Name</p>
          <p>Phone</p>
          <p>Place</p>
          <p>Experience</p>
          <p>Language</p>
          <p>Action</p>
        </div>

        {/* Data Rows */}
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <AgentRowSkeleton key={i} index={i} />
            ))
          : filteredAgents.map((agent, i) => (
              <AgentRow key={agent._id || i} agent={agent} index={i} />
            ))}
      </div>
    </>
  );
};

export default AgentList;
