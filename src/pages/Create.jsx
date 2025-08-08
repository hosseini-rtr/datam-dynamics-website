import { send, shield, star } from "../assets";
import Seo from "../components/Seo";
import styles, { layout } from "../style";

const processSteps = [
  {
    id: "step-1",
    icon: star,
    title: "Design Phase",
    content:
      "Our expert team works closely with you to understand your requirements and create detailed designs for your autonomous solution.",
  },
  {
    id: "step-2",
    icon: shield,
    title: "Development",
    content:
      "We develop custom software and integrate hardware components to build your autonomous system according to specifications.",
  },
  {
    id: "step-3",
    icon: send,
    title: "Testing & Deployment",
    content:
      "Rigorous testing ensures reliability, followed by smooth deployment and ongoing support.",
  },
];

const Create = () => (
  <>
    <Seo
      title="Create Your Autonomous Solution - Datam Dynamics"
      description="Partner with us to design, develop, and deploy custom autonomous solutions tailored to your needs."
      canonical="/create"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
                Create Your Autonomous <br className="sm:block hidden" />{" "}
                Solution
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Partner with us to create custom autonomous solutions that
                transform your operations and drive innovation.
              </p>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-row p-6 rounded-[20px] ${
                    index !== processSteps.length - 1 ? "mb-6" : "mb-0"
                  } feature-card`}
                >
                  <div
                    className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
                  >
                    <img
                      src={step.icon}
                      alt="icon"
                      className="w-[50%] h-[50%] object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col ml-3">
                    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                      {step.title}
                    </h4>
                    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
);

export default Create;
