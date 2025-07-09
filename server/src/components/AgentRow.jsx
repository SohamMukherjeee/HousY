// components/AgentRow.jsx
import React from "react";
import AgentMeeting from "./AgentMeeting";
const AgentRow = ({ agent, index }) => {
  const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-2 p-3 items-start sm:items-center ${bgColor} border-b text-sm`}
    >
      <p>{agent.name}</p>
      <p>{agent.phone}</p>
      {/* <p>{agent.email}</p> */}
      <p>{agent.place}</p>
      {/* <p>₹{agent.price}</p> */}
      <p>{agent.experience} yr</p>
      <p>{agent.languages.join(", ")}</p>
      <AgentMeeting agent={agent} />
    </div>
  );
};

export default AgentRow;
