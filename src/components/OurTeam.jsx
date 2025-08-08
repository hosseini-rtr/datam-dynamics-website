import { heroes } from "../constants";
import styles from "../style";
import HeroCard from "./HeroCard";

const OurTeam = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Meet Our <br className="sm:block hidden" /> Team
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Our diverse team of experts brings together cutting-edge knowledge in
          robotics, AI, mechanical engineering, and electrical systems to create
          innovative autonomous solutions.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {heroes.map((card) => (
        <HeroCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default OurTeam;
