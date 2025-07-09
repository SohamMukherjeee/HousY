import React from "react";
import { SiGooglemeet } from "react-icons/si";

const AgentMeeting = ({ agent }) => {
  const getTimeRange = () => {
    const start = new Date();
    start.setDate(start.getDate() + 1); // Tomorrow
    start.setUTCHours(12, 0, 0, 0); // 12 PM UTC

    const end = new Date(start);
    end.setHours(start.getHours() + 1); // 1-hour duration

    const format = (date) =>
      date.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";

    return {
      startTime: format(start),
      endTime: format(end),
    };
  };

  const { startTime, endTime } = getTimeRange();

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Meeting with ${agent.name} (${agent.agency || "Agent"})`,
    dates: `${startTime}/${endTime}`,
    details: `Let's discuss real estate opportunities with ${agent.name}.`,
    location: agent.place || "Online",
    add: agent.email || agent.phone,
  });

  const calendarLink = `https://calendar.google.com/calendar/render?${params.toString()}`;

  return (
    <a
      href={calendarLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success flex items-center gap-2 text-sm px-2 py-1 rounded"
    >
      <SiGooglemeet className="text-lg" />
      <span>Schedule</span>
    </a>
  );
};

export default AgentMeeting;
