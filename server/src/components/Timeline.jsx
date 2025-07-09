import FAQ from "./FAQ";
import Testimonals from "./Testimonals";
function Timeline() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full flex-col gap-15">
      <div className="head-tl flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black">
          Find Your Dream <span className="text-[#D3766A]">Home</span>
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-2xl p-10 sm:p-0">
        {/* Timeline Item 1 */}
        <div className="relative flex gap-4">
          <div className="relative">
            <div className="absolute left-1/2 top-5 h-full w-0.5 -translate-x-1/2 bg-stone-200"></div>
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-stone-200">
              <svg
                width="1.5em"
                height="1.5em"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 17H15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 mb-10">
            <p className="text-base font-bold text-stone-800">
              Search & Explore
            </p>
            <small className="mt-2 block text-sm text-stone-600">
              Use filters to find properties by city, PIN code, price range, and
              district.
            </small>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative flex gap-4">
          <div className="relative">
            <div className="absolute left-1/2 top-5 h-full w-0.5 -translate-x-1/2 bg-stone-200"></div>
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-stone-200">
              <svg
                width="1.5em"
                height="1.5em"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 mb-10">
            <p className="text-base font-bold text-stone-800 ">
              Schedule & Visit
            </p>
            <small className="mt-2 block text-sm text-stone-600">
              Book an online or in-person property tour.
            </small>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative flex gap-4">
          <div className="relative">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-stone-200">
              <svg
                width="1.5em"
                height="1.5em"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex-1">
            <p className="text-base font-bold text-stone-800">Buy & Move In</p>
            <small className="mt-2 block text-sm text-stone-600">
              Finalize your purchase with secure transactions.
            </small>
          </div>
        </div>
      </div>
      <div className="faq-section w-3/4 flex flex-col justify-center items-center pt-10 sm:pt-20">
        <h1 className="text-2xl pt-7 font-bold text-center">
          Hear From<span className="text-[#D3766A]"> Happy </span>Clients
        </h1>
        <div className="flex justify-center items-center sm:flex-row  flex-col w-full px-5 gap-x-9 gap-y-4 pt-20 pb-10">
          <Testimonals
            props={{
              name: "Ashmita Dutta (Kolkata)",
              desc: "I was surprised how easy it was to find and connect directly with the property owner on Housy. No middlemen, no delays,just honest conversations and quick decisions.",
            }}
          />
          <Testimonals
            props={{
              name: "Ankur Mehta (Pune)",
              desc: "I needed help navigating the property market in a new city, and the agents on Housy were super professional and responsive. One of them helped me find a perfect 2BHK within my budget in just three days.",
            }}
          />
        </div>
        <h1 className="text-xl sm:text-2xl pt-20 pb-10 font-bold text-center">
          Need Help? Here Are Some <span className="text-[#D3766A]">FAQs</span>
        </h1>

        <FAQ className="pb-10" />
      </div>
    </div>
  );
}

export default Timeline;
