import { bill } from "../assets";
import styles, { layout } from "../style";

const WhatWeDo = () => (
  <section id="WhatWeDo" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="WhatWeDo"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <br className="sm:block hidden" /> What we do
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We specialize in end-to-end development of autonomous machines — from
        hardware architecture and embedded systems, to artificial intelligence,
        control theory, and intelligent networking. Our multidisciplinary team
        thrives on complexity and transforms problems into elegant, scalable
        systems.
      </p>
    </div>
  </section>
);

export default WhatWeDo;
