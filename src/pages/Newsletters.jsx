import { send } from "../assets";
import Seo from "../components/Seo";
import styles, { layout } from "../style";

const newsletterCategories = [
  {
    id: "cat-1",
    title: "Technology Updates",
    description:
      "Stay informed about the latest developments in autonomous technology and robotics.",
  },
  {
    id: "cat-2",
    title: "Industry Insights",
    description:
      "Receive expert analysis and insights about the autonomous systems industry.",
  },
  {
    id: "cat-3",
    title: "Company News",
    description:
      "Get updates about our latest projects, partnerships, and company developments.",
  },
];

const NewsletterCard = ({ title, description }) => (
  <div className="flex flex-col p-8 rounded-[20px] bg-black-gradient-2 hover:bg-black-gradient transition-all duration-300 shadow-xl h-full">
    <div
      className={`w-[60px] h-[60px] rounded-full ${styles.flexCenter} bg-blue-gradient mb-6`}
    >
      <img
        src={send}
        alt="send"
        className="w-[50%] h-[50%] object-contain filter brightness-110"
      />
    </div>
    <h4 className="font-poppins font-semibold text-[22px] leading-[32px] text-white mb-4">
      {title}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
      {description}
    </p>
  </div>
);

const SubscriptionForm = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[600px] mt-10 bg-black-gradient-2 p-8 rounded-[20px] shadow-xl">
    <input
      type="email"
      placeholder="Enter your email address"
      className="w-full sm:w-[350px] h-[60px] bg-primary rounded-[15px] outline-none font-poppins font-normal text-[16px] text-white px-6 mb-4 sm:mb-0 border-2 border-dimBlue focus:border-secondary transition-all duration-300"
    />
    <button
      type="button"
      className={`w-full sm:w-auto py-4 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[15px] hover:shadow-lg transition-all duration-300`}
    >
      Subscribe
    </button>
  </div>
);

const Newsletters = () => (
  <>
    <Seo
      title="Newsletters - Datam Dynamics"
      description="Subscribe to receive the latest updates and insights about autonomous technology delivered to your inbox."
      canonical="/newsletters"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>Subscribe to Our Newsletters</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Get the latest updates and insights about autonomous technology
                delivered directly to your inbox.
              </p>
              <SubscriptionForm />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-[1] mt-10">
              {newsletterCategories.map((category) => (
                <NewsletterCard key={category.id} {...category} />
              ))}
            </div>

            <div className="w-full mt-10">
              <p className="font-poppins font-normal text-[14px] text-dimWhite text-center">
                By subscribing, you agree to receive marketing communications
                from us. You can unsubscribe at any time.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default Newsletters;
