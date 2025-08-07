import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../style';
import { api } from '../services/api';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await api.getPost(id);
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div className="text-white text-center py-10">Loading...</div>;
    if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
    if (!post) return <div className="text-white text-center py-10">Post not found</div>;

    return (
        <article itemScope itemType="http://schema.org/BlogPosting" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

            <div className="w-full max-w-[1200px] relative z-[1] p-8">
                <div className="w-full h-[400px] mb-8">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-[20px]"
                        itemProp="image"
                        loading="lazy"
                    />
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <p itemProp="author" className="font-poppins font-normal text-dimWhite text-[16px]">
                        {post.author}
                    </p>
                    <span className="text-dimWhite">•</span>
                    <time
                        itemProp="datePublished"
                        dateTime={post.created_at}
                        className="font-poppins font-normal text-dimWhite text-[16px]"
                    >
                        {post.created_at}
                    </time>
                </div>

                <h1
                    itemProp="headline"
                    className="font-poppins font-semibold text-white text-[32px] leading-[50px] mb-6"
                >
                    {post.title}
                </h1>

                <div
                    itemProp="articleBody"
                    className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] whitespace-pre-wrap"
                >
                    {post.content}
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;