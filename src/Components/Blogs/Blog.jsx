import PropTypes from 'prop-types';
const Blog = ({ blog, handleMarkAsRead, handleClick }) => {

    // console.log(blog);

    const { id, cover, title, author, author_img, posted_date, reading_time, description, hashtags } = blog;
    return (
        <div>
            <img src={author_img} alt="" />
            <div>
                <h3 className='font-bold'>{author}</h3>
                <p>{posted_date}</p>
                <p>{reading_time} min read</p>
                <button className='bg-red-300 text-white font-semibold border-2 rounded-lg p-3' onClick={() => handleClick(blog)}>Add</button>
            </div>
            <h1 className='text-xl font-semibold text-emerald-400'>{title}</h1>
            <p className=' text-gray-400'>{description}</p>
            <button className='text-blue-600 visited:text-purple-600 ' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
            <p>{hashtags.map((hastag, id) => <p key={id}>#{hastag}</p>)}</p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;