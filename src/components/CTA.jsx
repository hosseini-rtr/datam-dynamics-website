import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s be together!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We believe in strong partnerships. We're open to collaboration with:
      </p>
      <ul className="list-disc pl-5 mt-3">
        <li className={styles.paragraph}> Academic researchers</li>
        <li className={styles.paragraph}> Tech companies</li>
        <li className={styles.paragraph}> Hardware suppliers</li>
      </ul>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button to="/sponsor">Be Sponsor</Button>
    </div>
  </section>
);

export default CTA;
