import axios from "axios";
import { useEffect, useState } from "react";
import { SlHome } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(data?.blog);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className="blogpost">
      <div className="newLinks">
        <Link to="/">
          <SlHome />
        </Link>
      </div>
      <h2>{blog?.title}</h2>
      <div
        className="blogpost-body"
        dangerouslySetInnerHTML={{ __html: blog?.body }}
      ></div>
      <h2 className="summary">Summary:</h2>
      <p>{blog?.summary}</p>
    </div>
  );
};

export default BlogPost;
