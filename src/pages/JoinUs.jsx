import { useState } from "react";
import FormInput from "../components/FormInput";
import styles, { layout } from "../style";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    role: "developer",
    resume: "",
    linkedin: "",
    website: "",
    last_education_academy_name: "",
    education_level: "bachelors",
    wants_further_study: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.submitTeammateRequest(formData);

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
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-col items-center justify-center py-20">
              <h2 className={styles.heading2}>Thank You!</h2>
              <p className={`${styles.paragraph} text-center mt-5`}>
                Your application has been submitted successfully. We'll get back
                to you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`flex flex-col ${styles.paddingY}`}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>Join Our Team</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Be part of our innovative team and help shape the future of
                autonomous technology.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full mt-10"
            >
              <div className="bg-black-gradient-2 rounded-[20px] p-10 space-y-8 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput
                    label="Full Name"
                    name="full_name"
                    value={formData.full_name}
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
                    label="Role"
                    type="select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    options={[
                      {
                        value: "team_leader",
                        display_name: "Team Leader",
                      },
                      {
                        value: "project_manager",
                        display_name: "Project Manager",
                      },
                      {
                        value: "finance_sponsorship_manager",
                        display_name: "Finance & Sponsorship Manager",
                      },
                      {
                        value: "powertrain_engineer",
                        display_name: "Powertrain Engineer",
                      },
                      {
                        value: "fuel_system_engineer",
                        display_name: "Fuel System Engineer",
                      },
                      {
                        value: "cooling_system_engineer",
                        display_name: "Cooling System Engineer",
                      },
                      {
                        value: "battery_management_system_engineer",
                        display_name:
                          "Battery Management System (BMS) Engineer",
                      },
                      {
                        value: "chassis_engineer",
                        display_name: "Chassis Engineer",
                      },
                      {
                        value: "bodywork_aerodynamics_engineer",
                        display_name: "Bodywork & Aerodynamics Engineer",
                      },
                      {
                        value: "suspension_engineer",
                        display_name: "Suspension Engineer",
                      },
                      {
                        value: "steering_brakes_engineer",
                        display_name: "Steering & Brakes Engineer",
                      },
                      {
                        value: "electronics_engineer",
                        display_name: "Electronics Engineer",
                      },
                      {
                        value: "control_systems_engineer",
                        display_name: "Control Systems Engineer",
                      },
                      {
                        value: "software_telemetry_engineer",
                        display_name: "Software & Telemetry Engineer",
                      },
                      {
                        value: "transmission_engineer",
                        display_name: "Transmission Engineer",
                      },
                      {
                        value: "driveline_engineer",
                        display_name: "Driveline Engineer",
                      },
                      {
                        value: "vehicle_dynamics_engineer",
                        display_name: "Vehicle Dynamics Engineer",
                      },
                      {
                        value: "simulation_testing_engineer",
                        display_name: "Simulation & Testing Engineer",
                      },
                      {
                        value: "manufacturing_engineer",
                        display_name: "Manufacturing Engineer",
                      },
                      {
                        value: "materials_engineer",
                        display_name: "Materials Engineer",
                      },
                      {
                        value: "testing_engineer",
                        display_name: "Testing Engineer",
                      },
                      {
                        value: "data_analysis_engineer",
                        display_name: "Data Analysis Engineer",
                      },
                      {
                        value: "business_plan_manager",
                        display_name: "Business Plan Manager",
                      },
                      {
                        value: "marketing_media_manager",
                        display_name: "Marketing & Media Relations",
                      },
                      {
                        value: "event_coordinator",
                        display_name: "Event Coordinator",
                      },
                      {
                        value: "driver",
                        display_name: "Driver",
                      },
                      {
                        value: "pit_crew",
                        display_name: "Pit Crew",
                      },
                      {
                        value: "safety_officer",
                        display_name: "Safety Officer",
                      },
                      {
                        value: "compliance_engineer",
                        display_name: "Compliance Engineer",
                      },
                      {
                        value: "autonomous_systems_engineer",
                        display_name: "Autonomous Systems Engineer",
                      },
                      {
                        value: "computer_vision_engineer",
                        display_name: "Computer Vision Engineer",
                      },
                      {
                        value: "lidar_sensor_integration_engineer",
                        display_name: "LIDAR & Sensor Integration Engineer",
                      },
                    ]}
                  />

                  <FormInput
                    label="LinkedIn Profile"
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="Website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="Last Education Academy"
                    name="last_education_academy_name"
                    value={formData.last_education_academy_name}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Education Level"
                    type="select"
                    name="education_level"
                    value={formData.education_level}
                    onChange={handleChange}
                    required
                    options={[
                      {
                        value: "undergraduate",
                        display_name: "Undergraduate",
                      },
                      {
                        value: "postgraduate",
                        display_name: "Postgraduate",
                      },
                      {
                        value: "phd",
                        display_name: "PhD",
                      },
                      {
                        value: "other",
                        display_name: "Other",
                      },
                    ]}
                  />
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="wants_further_study"
                      checked={formData.wants_further_study}
                      onChange={handleChange}
                      className="w-5 h-5 bg-primary border border-dimBlue rounded border-secondary appearance-none checked:bg-secondary checked:border-secondary transition-all duration-300"
                    />
                  </div>
                  <label className="font-poppins font-medium text-[16px] text-white">
                    Planning for further studies
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full sm:w-auto py-5 px-10 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[15px] hover:shadow-lg transition-all duration-300 mt-6 self-center ${
                    isLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
