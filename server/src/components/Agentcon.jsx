import agent2 from "../assets/Business-deal-cuate.png";
function Agentcon() {
  return (
    <>
      <div className="main flex justify-center sm:flex-row flex-col gap-10 sm:gap-0 w-screen h-screen">
        <div className="title-sec flex justify-center flex-col ">
          <h1 className="font-bold text-gray-600 text-2xl text-center">
            <span className="text-[#D3766A]">Recommendations</span> from Agents
          </h1>
          <p className="text-gray-400 text-center">
            Sign in for more personal touch
          </p>
        </div>
        <div className="title-photo-sec flex justify-center items-center flex-col">
          <img src={agent2} alt="Agent" className="h-60 sm:h-90 w-60 sm:w-90" />
        </div>
      </div>
    </>
  );
}
export default Agentcon;
