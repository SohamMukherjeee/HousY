import { FaQuoteLeft } from "react-icons/fa";

function Testimonals({ props }) {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
      <h1 className="text-center text-md  font-semibold italic">
        <FaQuoteLeft className=" text-gray-400" />
        {props.desc}
      </h1>
      <p className="text-[#A6A6A6] ">~{props.name}</p>
    </div>
  );
}
export default Testimonals;
