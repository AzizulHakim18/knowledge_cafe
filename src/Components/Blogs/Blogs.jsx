
import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    console.log(blogs);
    return (
        <div className="w-2/3">
            <h1 className="text-2xl font-semibold">Blogs: {blogs.length}</h1>

            <div className="my-3">

            </div>
        </div>
    );
};

export default Blogs;