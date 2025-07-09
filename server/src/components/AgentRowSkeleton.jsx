// components/AgentRowSkeleton.jsx
import React from "react";

const AgentRowSkeleton = ({ index }) => {
  const bgColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <div
      className={`grid grid-cols-8 gap-2 p-3 items-center ${bgColor} animate-pulse`}
    >
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="h-4 bg-gray-300 rounded w-full" />
        ))}
    </div>
  );
};

export default AgentRowSkeleton;
