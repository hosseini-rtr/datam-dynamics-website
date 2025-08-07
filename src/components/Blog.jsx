import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../style';
import { api } from '../services/api';

const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      onClick={() => navigate(`/blog/${post.id}`)}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <div className="flex flex-col p-6 rounded-[20px] innovation-card mb-6 h-[500px]" role="article">
        <div className="w-full h-[200px] mb-4 bg-dimBlue rounded-[10px] overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title || 'Blog post'}
              className="w-full h-full object-cover"
              itemProp="image"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">No image available</div>
          )}
        </div>
        <h2 itemProp="headline" className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-2 line-clamp-2 h-[46px]">
          {post.title || 'Untitled Post'}
        </h2>
        <p itemProp="description" className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-2 flex-grow line-clamp-4">
          {post.og_description || 'No description available'}
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <p itemProp="author" className="font-poppins font-normal text-dimWhite text-[14px]">{post.author || 'Anonymous'}</p>
            <span className="text-dimWhite">•</span>
            <time itemProp="datePublished" dateTime={post.created_at} className="font-poppins font-normal text-dimWhite text-[14px]">
              {post.created_at || 'No date'}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog = ({ limit, showMoreButton = false }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getPosts();
        setPosts(limit ? data.slice(0, limit) : data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section className={`${styles.paddingY}  ${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      {showMoreButton && (
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Latest Blog Posts</h1>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Stay updated with our latest insights and news about technology.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full relative z-[1] mb-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {showMoreButton && posts.length >= limit && (
          <button
            onClick={() => navigate('/blog')}
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-6"
          >
            Show More Posts
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;