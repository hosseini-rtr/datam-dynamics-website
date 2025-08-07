import styles from "../style";
import { layout } from "../style";
import Blog from "../components/Blog";

const BlogPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Latest Insights & News
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Stay updated with the latest developments in autonomous technology and industry insights.
            </p>
          </div>
          <Blog limit={0} showMoreButton={false} />
        </section>
      </div>
    </div>
  </div>
);

export default BlogPage;