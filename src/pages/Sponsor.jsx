import { useState } from "react";
import FormInput from "../components/FormInput";
import Seo from "../components/Seo";
import styles, { layout } from "../style";

const sponsorshipTypes = [
  {
    value: "financial",
    label: "Financial",
  },
  {
    value: "equipment",
    label: "Equipment",
  },
  {
    value: "services",
    label: "Services",
  },
  {
    value: "other",
    label: "Other",
  },
];

const Sponsor = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    company_website: "",
    email: "",
    phone_number: "",
    sponsorship_type: "technology_partner",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.submitSponsorRequest(formData);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Seo
          title="Sponsorship Request Submitted - Datam Dynamics"
          description="Your sponsorship request has been submitted successfully. We'll contact you soon to discuss opportunities."
          canonical="/sponsor"
        />
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <div className="flex flex-col items-center justify-center py-20">
                <h2 className={styles.heading2}>Thank You!</h2>
                <p className={`${styles.paragraph} text-center mt-5`}>
                  Your sponsorship request has been submitted successfully.
                  We'll contact you soon to discuss the opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Become a Sponsor - Datam Dynamics"
        description="Partner with us to drive innovation in autonomous technology and shape the future together."
        canonical="/sponsor"
      />
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`flex flex-col ${styles.paddingY}`}>
              <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Become a Sponsor</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Partner with us to drive innovation in autonomous technology
                  and shape the future together.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full mt-10 bg-black-gradient-2 rounded-[20px] p-10 shadow-xl"
              >
                <div className="flex flex-col gap-6">
                  <FormInput
                    label="Company Name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Contact Name"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Company Website"
                    type="url"
                    name="company_website"
                    value={formData.company_website}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Phone Number"
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Sponsorship Type"
                    type="select"
                    name="sponsorship_type"
                    value={formData.sponsorship_type}
                    onChange={handleChange}
                    required
                    options={sponsorshipTypes}
                  />

                  <FormInput
                    label="Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your sponsorship offer or any questions"
                    className="col-span-2"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${
                      isLoading ? "opacity-50" : ""
                    }`}
                  >
                    {isLoading ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
