import styles from "../style";
import { layout } from "../style";
import { shield, star } from "../assets";

const helpTopics = [
  {
    id: "topic-1",
    icon: star,
    title: "Getting Started",
    content: "Learn how to integrate and deploy our autonomous systems in your environment.",
    subtopics: [
      "System Requirements",
      "Installation Guide",
      "Initial Configuration",
      "Basic Operations"
    ]
  },
  {
    id: "topic-2",
    icon: shield,
    title: "Troubleshooting",
    content: "Find solutions to common issues and get technical support for your implementation.",
    subtopics: [
      "Common Issues",
      "Error Messages",
      "Performance Optimization",
      "System Updates"
    ]
  }
];

const HelpCenter = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Help Center
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Get the support you need to make the most of our autonomous technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full relative z-[1]">
            {helpTopics.map((topic) => (
              <div key={topic.id} className="flex flex-col p-8 rounded-[20px] bg-black-gradient-2 hover:bg-black-gradient transition-all duration-300 feedback-card">
                <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-6`}>
                  <img src={topic.icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
                </div>
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mb-4">
                  {topic.title}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-6">
                  {topic.content}
                </p>
                <ul className="list-none space-y-3">
                  {topic.subtopics.map((subtopic, index) => (
                    <li
                      key={index}
                      className="flex items-center cursor-pointer group">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3 group-hover:bg-white transition-colors duration-300"></div>
                      <p className="font-poppins font-normal text-[16px] text-dimWhite group-hover:text-white transition-colors duration-300">
                        {subtopic}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default HelpCenter;