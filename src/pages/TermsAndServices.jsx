import Seo from "../components/Seo";
import styles from "../style";

const sections = [
  {
    title: "Terms of Use",
    content:
      "By accessing and using Datam Dynamics' services and products, you agree to comply with these terms and conditions. Our services are designed for professional and business use in autonomous technology applications.",
  },
  {
    title: "Privacy Policy",
    content:
      "We are committed to protecting your privacy and handling your data with transparency. We collect and process data in accordance with relevant data protection regulations and industry standards.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, technology, and intellectual property on our platform are owned by Datam Dynamics. Users may not copy, modify, or distribute our content without explicit permission.",
  },
  {
    title: "Liability",
    content:
      "While we strive for accuracy and reliability, Datam Dynamics is not liable for any damages arising from the use of our services. Users are responsible for their implementation and usage of our technology.",
  },
];

const TermsAndServices = () => (
  <>
    <Seo
      title="Terms & Services - Datam Dynamics"
      description="Review our terms, privacy policy, intellectual property, and liability information."
      canonical="/terms-and-services"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
          >
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6">
              <h2 className={styles.heading2}>Terms & Services</h2>
              <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                  Please review our terms and conditions carefully to understand
                  your rights and responsibilities when using our services.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-[20px] mb-6 feature-card"
                >
                  <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px] mb-4">
                    {section.title}
                  </h4>
                  <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default TermsAndServices;
