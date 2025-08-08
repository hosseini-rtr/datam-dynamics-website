import Seo from "../components/Seo";
import { innovations } from "../constants";
import styles from "../style";

const Content = () => (
  <>
    <Seo
      title="Content - Datam Dynamics"
      description="Discover our resources, articles, and insights about autonomous vehicles and robotics technology."
      canonical="/content"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
          >
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
              <h2 className={styles.heading2}>Explore Our Content</h2>
              <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                  Discover our comprehensive collection of resources, articles,
                  and insights about autonomous vehicles and robotics
                  technology.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
              {innovations.map((card) => (
                <div
                  key={card.id}
                  className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
                >
                  <img
                    src={card.icon}
                    alt="icon"
                    className="w-[42.6px] h-[27.6px] object-contain"
                  />
                  <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white my-10">
                    {card.title}
                  </h4>
                  <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite">
                    {card.content}
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

export default Content;
