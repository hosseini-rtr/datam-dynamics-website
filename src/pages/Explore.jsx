import styles from "../style";
import { layout } from "../style";
import { shield, star } from "../assets";

const applications = [
  {
    id: "app-1",
    title: "Autonomous Vehicles",
    content: "Our autonomous vehicle technology enables safe and efficient transportation solutions across various industries.",
    features: [
      "Advanced navigation systems",
      "Real-time obstacle detection",
      "Adaptive path planning"
    ]
  },
  {
    id: "app-2",
    title: "Industrial Robotics",
    content: "Smart robotic systems that enhance manufacturing and logistics operations with precision and reliability.",
    features: [
      "Automated assembly lines",
      "Warehouse automation",
      "Quality control systems"
    ]
  }
];

const ApplicationCard = ({ title, content, features }) => (
  <div className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mb-6">
      {title}
    </h4>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite mb-6">
      {content}
    </p>
    <ul className="list-none mt-4">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex flex-row items-center py-[6px]">
          <div className={`w-[24px] h-[24px] rounded-full ${styles.flexCenter} bg-dimBlue mr-3`}>
            <img src={index % 2 === 0 ? star : shield} alt="icon" className="w-[50%] h-[50%] object-contain" />
          </div>
          <p className="font-poppins font-normal text-[16px] text-dimWhite">
            {feature}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const Explore = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Explore Our Technology <br className="sm:block hidden" /> Applications
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Discover how our autonomous technology solutions are transforming industries and creating new possibilities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center w-full relative z-[1]">
            {applications.map((app) => (
              <ApplicationCard key={app.id} {...app} />
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Explore;