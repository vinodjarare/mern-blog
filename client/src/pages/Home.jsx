import { Link } from "react-router-dom";
import Card from "../components/Card";
import { FiFilePlus } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="home">
      {blogs?.map((blog) => (
        <Card blog={blog} key={blog?._id} />
      ))}
      <div className="icon">
        <Link to="new">
          <FiFilePlus />
        </Link>
      </div>
    </div>
  );
};

export default Home;
