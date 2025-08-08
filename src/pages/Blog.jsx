import Blog from "../components/Blog";
import Seo from "../components/Seo";
import styles, { layout } from "../style";

const BlogPage = () => (
  <>
    <Seo
      title="Blog - Datam Dynamics"
      description="Stay updated with the latest developments in autonomous technology and industry insights from Datam Dynamics."
      canonical="/blog"
      image="/summary_large_image.png"
    />
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>Latest Insights & News</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Stay updated with the latest developments in autonomous
                technology and industry insights.
              </p>
            </div>
            <Blog limit={0} showMoreButton={false} />
          </section>
        </div>
      </div>
    </div>
  </>
);

export default BlogPage;