import { sponsor } from "../assets";
import Seo from "../components/Seo";
import styles, { layout } from "../style";

const partners = [
  {
    id: "partner-1",
    logo: sponsor,
    name: "sponsor",
    description: "Strategic partner in autonomous hospitality solutions.",
  },
  {
    id: "partner-2",
    logo: sponsor,
    name: "Binance",
    description:
      "Collaborating on blockchain integration for autonomous systems.",
  },
  {
    id: "partner-3",
    logo: sponsor,
    name: "Coinbase",
    description: "Partner in developing secure transaction systems.",
  },
  {
    id: "partner-4",
    logo: sponsor,
    name: "Dropbox",
    description: "Cloud storage solutions for autonomous data management.",
  },
];

const partnershipBenefits = [
  "Access to cutting-edge autonomous technology",
  "Joint research and development opportunities",
  "Customized solution development",
  "Priority technical support",
  "Co-marketing opportunities",
];

const Partners = () => (
  <>
    <Seo
      title="Partners - Datam Dynamics"
      description="Explore our partnerships and learn how we collaborate with industry leaders to advance autonomous technology."
      canonical="/partners"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={``}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>Our Partners</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Join our network of industry leaders in shaping the future of
                autonomous technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center p-8 rounded-[20px] bg-black-gradient-2 hover:bg-black-gradient transition-all duration-300 shadow-xl"
                >
                  <div className="w-full h-[80px] flex items-center justify-center mb-8">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-[160px] h-[48px] object-contain filter brightness-110"
                    />
                  </div>
                  <h4 className="font-poppins font-semibold text-[22px] leading-[32px] text-white text-center mb-4">
                    {partner.name}
                  </h4>
                  <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black-gradient-2 rounded-[20px] p-10">
              <h3 className="font-poppins font-semibold text-[28px] leading-[36px] text-white mb-8 text-center">
                Partnership Benefits
              </h3>
              <ul className="list-none grid sm:grid-cols-2 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center py-4 px-6 bg-primary rounded-[15px] hover:bg-dimBlue transition-all duration-300"
                  >
                    <div
                      className={`w-[32px] h-[32px] rounded-full ${styles.flexCenter} bg-blue-gradient mr-4 flex-shrink-0`}
                    >
                      <div className="w-[16px] h-[16px] rounded-full bg-primary" />
                    </div>
                    <p className="font-poppins font-normal text-[18px] text-white flex-1">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default Partners;
