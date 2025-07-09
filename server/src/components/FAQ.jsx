function FAQ() {
  return (
    <>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How can I list my property on Housy?
        </div>
        <div className="collapse-content text-sm">
          To list your property, simply create an account, navigate to the
          "Sell" section and fill in the required details like location, price,
          photos, and amenities. Once submitted, our team may review the listing
          before it goes live.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Are there any charges for using Housy?
        </div>
        <div className="collapse-content text-sm">
          Browsing properties and contacting owners or agents is free for users.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I contact the property owner?
        </div>
        <div className="collapse-content text-sm">
          Each listing includes a contact button that allows you to call or
          message the owner directly through the Google meet platform.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is Housy available in my city?
        </div>
        <div className="collapse-content text-sm">
          Housy is expanding rapidly. You can check availability by entering
          your city or pin code on the homepage. If we're not there yet, stay
          tuned—we might be coming soon!
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I verify the authenticity of a listing?
        </div>
        <div className="collapse-content text-sm">
          We take fraudulent listings seriously. Verified badges are shown on
          listings that have been vetted. Always review property details and
          never make advance payments without proper verification.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I edit or delete my property listing later?
        </div>
        <div className="collapse-content text-sm">
          Yes, after logging in, go to your dashboard where you can edit, update
          status, or delete your listings anytime.
        </div>
      </div>
    </>
  );
}
export default FAQ;
