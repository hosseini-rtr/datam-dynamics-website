import { innovations } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const InnovationCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== innovations.length - 1 ? "mb-6" : "mb-0"
    } innovation-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const OurMission = () => (
  <section id="innovations" className={layout.section}>
    <div className={layout.sectionInfo}>
      <small style={{ color: "#f3f3f3" }}>Our Mission</small>
      <h2 className={styles.heading2}>
        Engineering the, <br className="sm:block hidden" /> Future of
        Engineering.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At Datam Dynamics, we design autonomous systems that blend software, AI,
        and robotics into seamless real-world solutions. From student
        competitions to future-defining technologies, we strive to create
        scalable, intelligent, and ethical autonomous platforms for emerging
        challenges.
      </p>

      <Button styles={`mt-10`} to="/join-us">
        Join Us
      </Button>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {innovations.map((innovation, index) => (
        <InnovationCard key={innovation.id} {...innovation} index={index} />
      ))}
    </div>
  </section>
);

export default OurMission;
