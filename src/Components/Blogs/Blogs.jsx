
import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';
const Blogs = ({ handleClick, handleReading }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold my-3">Blogs: {blogs.length}</h1>

            <div >
                {
                    blogs.map(blog => <Blog
                        key={blog.id} blog={blog}
                        handleClick={handleClick}
                        handleReading={handleReading}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleClick: PropTypes.func,
    handleReading: PropTypes.func
}
export default Blogs;