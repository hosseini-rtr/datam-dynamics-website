import { send, shield, star } from "../assets";
import Seo from "../components/Seo";
import styles from "../style";

const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Perception Systems",
    content:
      "Our advanced perception systems use multiple sensors including LiDAR, cameras, and radar to understand the environment in real-time.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Decision Making",
    content:
      "Sophisticated AI algorithms process sensor data to make intelligent decisions about navigation, obstacle avoidance, and task execution.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Control Systems",
    content:
      "Precise control systems translate decisions into smooth, accurate physical movements for optimal performance.",
  },
];

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="flex flex-col md:flex-row p-8 rounded-[20px] bg-black-gradient-2 hover:bg-black-gradient transition-all duration-300 feature-card h-full">
    <div className="flex items-start md:items-center">
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue flex-shrink-0`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
    </div>
    <div className="flex-1 flex flex-col mt-6 md:mt-0 md:ml-6">
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px] mb-4">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const HowItWorks = () => (
  <>
    <Seo
      title="How It Works - Datam Dynamics"
      description="Learn how our autonomous technology combines perception, decision-making, and control systems to deliver reliable performance."
      canonical="/how-it-works"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="features"
            className={`${styles.paddingY} ${styles.flexCenter} flex-col`}
          >
            <div className="flex-1 flex flex-col items-start justify-start">
              <h2 className={styles.heading2}>How Our Technology Works</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our autonomous systems combine cutting-edge hardware with
                sophisticated software to deliver reliable and efficient
                performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default HowItWorks;
