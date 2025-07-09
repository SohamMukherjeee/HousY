import { SiGooglemeet } from "react-icons/si";

const ScheduleMeetingButton = ({ property }) => {
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
    text: `Meeting regarding ${property.title}`,
    dates: `${startTime}/${endTime}`,
    details: `Let's discuss the property: ${property.description}`,
    location: property.google_map_link || "TBD",
    add: property.owner_contact,
  });

  const calendarLink = `https://calendar.google.com/calendar/render?${params.toString()}`;

  return (
    <a
      href={calendarLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success btn-md flex items-center gap-2 mt-4"
    >
      <SiGooglemeet className="text-lg" />
      <span>Schedule Meeting with Owner</span>
    </a>
  );
};

export default ScheduleMeetingButton;
