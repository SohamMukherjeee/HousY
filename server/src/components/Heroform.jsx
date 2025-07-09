import { useState } from "react";
import axios from "axios";
import { MdOutlinePermMedia } from "react-icons/md";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import DropzoneUpload from "./Drop";
const StepOne = () => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Title</label>
        <input
          {...register("title", { required: true })}
          placeholder="Spacious 2BHK in Kolkata"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="py-10">
        <label className="block font-medium text-gray-700 mb-1">Type</label>
        <input
          {...register("type", { required: true })}
          placeholder="Apartment,Studio,Vila"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          placeholder="2bhk apartment with a balcony.."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={5}
        ></textarea>
      </div>
    </div>
  );
};

const StepTwo = () => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Price</label>
        <input
          {...register("price", { required: true })}
          placeholder="5000000"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Area</label>
        <input
          {...register("area", { required: true })}
          placeholder="1200 sqft"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">City</label>
        <input
          {...register("city", { required: true })}
          placeholder="Kolkata"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">Pin Code</label>
        <input
          {...register("pin", { required: true })}
          placeholder="700102"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label>Google Map Link</label>
        <input
          {...register("google_map_link", { required: true })}
          placeholder="Paste Google Map URL"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label>Owner Name</label>
        <input
          {...register("owner_name", { required: true })}
          placeholder="Owner Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label>Owner Email</label>
        <input
          {...register("owner_contact", { required: true })}
          placeholder="@gmai.com"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};
const StepThree = ({ setPhotoUrls }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <label>Bedrooms</label>
        <input
          {...register("bedrooms", { required: true })}
          placeholder="2,3"
          className="mx-6 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label>Bathrooms</label>
        <input
          {...register("bathrooms", { required: true })}
          placeholder="1,2"
          className="mx-6 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label>Parking Space</label>
        <select
          {...register("parking_spaces", { required: true })}
          className="mx-6 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select --</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div>
        <label>Furnishing</label>
        <select
          {...register("furnishing", { required: true })}
          className="mx-6 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select --</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>
      <div>
        <label>Year Built</label>
        <input
          {...register("year_built", { required: true })}
          placeholder="YYYY"
          className="mx-6 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <DropzoneUpload onFilesUploaded={setPhotoUrls} />
      </div>
    </div>
  );
};

const Heroform = () => {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const [photoUrls, setPhotoUrls] = useState([]);
  const navigate = useNavigate();

  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree setPhotoUrls={setPhotoUrls} />,
  ];
  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      photos: photoUrls,
    };

    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      try {
        console.log("Submit done");

        const response = await axios.post(
          "http://localhost:5000/sell",
          finalData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("Response:", response.data);
        navigate("/processing");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong while submitting the property.");
      }
    }
  };
  <div className="flex justify-center gap-4 mb-6">
    {["1", "2", "3"].map((label, idx) => (
      <div
        key={idx}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
          step === idx ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        {label}
      </div>
    ))}
  </div>;

  return (
    <FormProvider {...methods}>
      <div className="my-40">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6"
        >
          <div className="min-h-[400px]">{steps[step]}</div>
          <div className="flex justify-between pt-4">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              {step === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Heroform;
